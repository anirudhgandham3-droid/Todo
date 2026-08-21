# 📝 To-Do List Application

A modern, feature-rich to-do list application with local storage functionality. Built with vanilla HTML, CSS, and JavaScript — no dependencies!

## ✨ Features

### Core Functionality
- ✅ Add, complete, and delete tasks
- 🏷️ Priority levels (Low, Medium, High)
- 📊 Real-time statistics dashboard
- 🔍 Smart filtering (All, Active, Completed, High Priority)
- 💾 Persistent local storage (offline-first)
- 📥 Export/Import tasks as JSON for backup

### User Experience
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Fully responsive (desktop, tablet, mobile)
- ⌨️ Keyboard support (press Enter to add tasks)
- 🎭 Smooth transitions and hover effects
- 🌙 Clean, modern interface

## 🚀 Quick Start

### Option 1: Use Online (Easiest)
Just open `index.html` in any web browser!

### Option 2: Deploy to GitHub Pages (Free)
1. Go to Settings → Pages
2. Select `main` branch as source
3. Your app will be live at `https://anirudhgandham3-droid.github.io/todo`

### Option 3: Deploy to Netlify (Instant)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the folder with these files
3. Done! Your app is live

## 📖 How to Use

### Adding Tasks
1. Type your task in the input field
2. Select priority level (Low, Medium, High)
3. Press **Enter** or click **Add** button

### Completing Tasks
- Click the checkbox next to a task to mark it complete
- Completed tasks show with strikethrough text

### Deleting Tasks
- Click the **Delete** button on any task
- Confirm deletion when prompted

### Filtering Tasks
- **All**: Show all tasks
- **Active**: Show only incomplete tasks
- **Completed**: Show only completed tasks
- **High Priority**: Show only high-priority tasks

### Organizing
- Tasks are automatically sorted by:
  1. Priority (High → Medium → Low)
  2. Completion status (Active first)
  3. Creation time (newest first)

### Backup & Restore
- **Export**: Download all tasks as `.json` file
- **Import**: Load tasks from previously exported file
- Choose to merge or replace existing tasks

## 💾 Local Storage

All your tasks are saved automatically to your browser's local storage:
- **No internet required** after initial load
- **Persistent**: Tasks survive browser restart
- **Private**: Data stays on your device
- **Secure**: No server uploads

### Storage Limits
- Chrome/Edge: ~10 MB
- Firefox: ~10 MB
- Safari: ~5 MB
- Mobile browsers: ~5-10 MB

## 📊 Statistics Dashboard

Real-time stats showing:
- **Total Tasks**: All tasks in your list
- **Completed**: Tasks you've finished
- **Remaining**: Pending tasks

## 🎨 Priority Levels

| Level | Color | Use Case |
|-------|-------|----------|
| **High** | 🔴 Red | Urgent, deadline-driven |
| **Medium** | 🟠 Orange | Important, schedule soon |
| **Low** | 🟢 Green | Nice to have, flexible |

## 📱 Responsive Design

- **Desktop**: Full feature set with comfortable spacing
- **Tablet**: Optimized layout with touch-friendly buttons
- **Mobile**: Compact view with scrollable task list

## 🔒 Privacy & Security

✅ All data stored locally (browser local storage)  
✅ No data sent to servers  
✅ No tracking or analytics  
✅ No sign-up required  
✅ Completely private  

## 📁 File Structure

```
todo/
├── index.html              # HTML structure & styling
├── app.js                  # JavaScript logic
├── README.md              # This file
└── LICENSE                # MIT License
```

## 🔧 Technical Details

- **Framework**: Vanilla JavaScript (no dependencies)
- **Storage**: Browser LocalStorage API
- **Compatibility**: All modern browsers
- **Size**: ~25 KB total (minified)
- **Performance**: Instant load, smooth animations

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Chromium | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Chrome | ✅ Latest |
| Mobile Safari | ✅ Latest |

## 💡 Tips & Tricks

1. **Keyboard Shortcut**: Press Enter after typing to add instantly
2. **Bulk Export**: Export regularly to avoid data loss
3. **Smart Sorting**: High-priority tasks float to top automatically
4. **Filter Focus**: Use filters to focus on what matters today
5. **Clean Sweep**: Use "Clear Completed" to remove finished tasks

## 🐛 Troubleshooting

### Tasks not saving?
- Check browser's local storage isn't full
- Clear browser cache and try again
- Try a different browser

### Can't import file?
- Ensure file is valid JSON format
- Use file exported from this app
- Check file size (must be < 5 MB)

### Tasks disappearing?
- Check if browser cache/cookies were cleared
- Try importing from backup export
- Ensure JavaScript is enabled

## 🔮 Future Enhancements

Potential features:
- 📅 Due dates with notifications
- 🏷️ Custom tags and categories
- 🔄 Recurring tasks
- ☁️ Cloud synchronization
- 🌙 Dark mode
- 📱 Mobile PWA app
- 🔔 Desktop notifications
- 📊 Analytics dashboard

## 📄 License

MIT License - Free to use, modify, and distribute

## 🙌 Contributing

Found a bug? Have a feature idea?
1. Open an issue on GitHub
2. Fork and make your changes
3. Submit a pull request

---

**Made with ❤️ for productivity enthusiasts**

### Get Started Now! 🎯
1. Open `index.html` in your browser
2. Add your first task
3. Start being productive!
