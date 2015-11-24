
//把HTML标签改成使用百分比作为内容，然后通过一个简单的脚本为其添加animation-delay内联样式。
function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}

$$('.pie').forEach(function(pie) {
    var p = pie.textContent;
    pie.style.animationDelay = '-' + parseFloat(p) + 's';
});