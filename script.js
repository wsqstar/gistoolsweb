function openTool(toolName) {
    // 隐藏所有工具
    var tools = document.getElementsByClassName('tool');
    for (var i = 0; i < tools.length; i++) {
        tools[i].style.display = 'none';
    }

    // 显示选定的工具
    var selectedTool = document.getElementById(toolName);
    if (selectedTool) {
        selectedTool.style.display = 'block';
    }
}
