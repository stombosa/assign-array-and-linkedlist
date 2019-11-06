
function searchList(node, target) {

    if (node.value === target) {
        return true;
    };
    let nodevalues = node.next
    if (nodevalues) {
        
        i
        return false;
    } else {
        let childNodes = node.descendents;
        for (anode of childNodes) {
            if (treeFind(anode, target)) {
                return true;
            };
        }
    }
    return false;
}