const targetNode = document.body;
const config = {
    childList: true,
};

const callback = (mutationList) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            for (const node of mutation.addedNodes) {
                if (node.nodeName === 'COM-1PASSWORD-BUTTON' && node.isConnected) {
                    targetNode.removeChild(node);
                }
            }
        }
    }
}

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);