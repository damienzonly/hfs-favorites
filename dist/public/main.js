"use strict"; {
    const favClass = 'hfs-fav'
    function isRoot(uri) {
        return uri === '/'
    }
    ; (() => {
        const config = HFS.getPluginConfig()
        if (!config.folders?.length) return
        let { folders, alwaysShow, marker } = config
        const favorites = folders?.map(({ dir, alias }) => new HFS.DirEntry(marker + ' ' + (alias ? `${alias}/` : dir), { url: dir, key: alias || `${dir}_favorite`, favorite: true }))
        HFS.onEvent('sortCompare', ({ a, b }) => {
            return a.favorite ? -1 : b.favorite ? -1 : 0
        })
        let onRoot
        HFS.watchState('uri', (uri) => {
            onRoot = isRoot(uri)
        })
        HFS.watchState('list', list => {
            if (onRoot || alwaysShow) {
                if (!list.find(o => o.favorite)) {
                    if (favorites) {
                        HFS.state.list.push(...favorites)
                    }
                }
            }
            Array.from(document.querySelectorAll('li.folder'))
                .map(node => {
                    node.classList.remove(favClass)
                    return node
                })
                .slice(0, favorites?.length).slice(-1)
                .map(node => {
                    node.classList.add(favClass)
                })
        })
    })();
}
