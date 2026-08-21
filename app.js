/**
 * To-Do List Application
 * Local Storage-based task management system
 */

let todos = [];
let currentFilter = 'all';
let selectedPriority = 'low';

document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    renderTodos();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('todoInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    document.querySelectorAll('input[name="priority"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            selectedPriority = e.target.value;
        });
    });
}

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();

    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        priority: selectedPriority,
        createdAt: new Date().toISOString(),
        dueDate: null
    };

    todos.push(todo);
    saveTodos();

    input.value = '';
    input.focus();

    document.querySelector('input[name="priority"][value="low"]').checked = true;
    selectedPriority = 'low';

    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        todos = todos.filter(t => t.id !== id);
        saveTodos();
        renderTodos();
    }
}

function filterTodos(filter) {
    currentFilter = filter;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderTodos();
}

function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
        case 'high':
            return todos.filter(t => t.priority === 'high');
        case 'all':
        default:
            return todos;
    }
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    const emptyState = document.getElementById('emptyState');
    const filteredTodos = getFilteredTodos();

    todoList.innerHTML = '';

    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const sorted = filteredTodos.sort((a, b) => {
        if (a.completed === b.completed) {
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return a.completed ? 1 : -1;
    });

    if (sorted.length === 0) {
        emptyState.style.display = 'block';
        todoList.innerHTML = '';
    } else {
        emptyState.style.display = 'none';

        sorted.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input
                    type="checkbox"
                    class="checkbox"
                    ${todo.completed ? 'checked' : ''}
                    onchange="toggleTodo(${todo.id})"
                />
                <span class="todo-text">${escapeHtml(todo.text)}</span>
                <span class="priority-badge priority-${todo.priority}">
                    ${todo.priority}
                </span>
                <button class="btn-delete" onclick="deleteTodo(${todo.id})">
                    Delete
                </button>
            `;
            todoList.appendChild(li);
        });
    }

    updateStats();

    const clearBtn = document.querySelector('.clear-all-btn');
    const hasCompleted = todos.some(t => t.completed);
    if (hasCompleted) {
        clearBtn.classList.add('show');
    } else {
        clearBtn.classList.remove('show');
    }
}

function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const remaining = total - completed;

    document.getElementById('totalCount').textContent = total;
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('remainingCount').textContent = remaining;
}

function clearCompleted() {
    if (confirm('Are you sure you want to delete all completed tasks?')) {
        todos = todos.filter(t => !t.completed);
        saveTodos();
        renderTodos();
    }
}

function saveTodos() {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    } catch (e) {
        console.error('Error saving todos:', e);
        alert('Error saving your tasks. Storage may be full.');
    }
}

function loadTodos() {
    try {
        const stored = localStorage.getItem('todos');
        todos = stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error('Error loading todos:', e);
        todos = [];
    }
}

function exportData() {
    const dataStr = JSON.stringify(todos, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `todos-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);

            if (!Array.isArray(imported)) {
                throw new Error('Invalid file format');
            }

            const merge = confirm('Merge with existing tasks? (Cancel to replace)');
            if (merge) {
                todos = [...todos, ...imported];
            } else {
                todos = imported;
            }

            saveTodos();
            renderTodos();
            alert('Tasks imported successfully!');
        } catch (error) {
            alert('Error importing file: ' + error.message);
        }
    };

    reader.readAsText(file);
    event.target.value = '';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}