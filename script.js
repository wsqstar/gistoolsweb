function openTool(toolName) {
    var tools = document.getElementsByClassName('tool');
    for (var i = 0; i < tools.length; i++) {
        tools[i].style.display = 'none';
    }

    if (toolName === 'tool1') {
        // 如果是工具1，直接跳转到 antlv7
        window.location.href = 'https://l7editor.antv.antgroup.com';
    } else {
        // 否则显示选定的工具内容
        var selectedTool = document.getElementById(toolName);
        if (selectedTool) {
            selectedTool.style.display = 'block';
        }
    }
}
