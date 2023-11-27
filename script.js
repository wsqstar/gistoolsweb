function openTool(toolName) {
    console.log('openTool function called with toolName:', toolName);

    var tools = document.getElementsByClassName('tool');
    for (var i = 0; i < tools.length; i++) {
        tools[i].style.display = 'none';
    }

    if (toolName === 'tool1') {
        console.log('Redirecting to https://l7editor.antv.antgroup.com');
        window.location.href = 'https://l7editor.antv.antgroup.com';
    } else {
        var selectedTool = document.getElementById(toolName);
        if (selectedTool) {
            selectedTool.style.display = 'block';
        }
    }
}
