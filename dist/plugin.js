exports.version = 1
exports.description = "Mark favorite directories"
exports.apiRequired = 9.1
exports.repo = "damienzonly/hfs-favorites"
exports.frontend_js = ['main.js']
exports.preview = ["https://github.com/user-attachments/assets/3f3259c6-1d12-4dea-93b3-899dda803510","https://github.com/user-attachments/assets/ea7cd46f-4205-4e71-afed-34ebc824b438"]

exports.config = {
    folders: {
        frontend: true,
        type: 'array',
        fields: {
            dir: {
                type: 'vfs_path',
                label: 'directory',
            },
            alias: {
                type: 'string',
                label: 'alias',
            }
        }
    },
    alwaysShow: {
        frontend: true,
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show favorites on every folder'
    },
    marker: {
        frontend: true,
        type: 'string',
        defaultValue: '⭐️',
        helperText: 'Shown before the favorite entry'
    },
    
}
