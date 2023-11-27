function openTool(toolName) {
    var tools = document.getElementsByClassName('tool');
    for (var i = 0; i < tools.length; i++) {
        tools[i].style.display = 'none';
    }

    var selectedTool = document.getElementById(toolName);
    if (selectedTool) {
        selectedTool.style.display = 'block';
    }
}
