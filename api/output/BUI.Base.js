Ext.data.JsonP.BUI_Base({"tagname":"class","name":"BUI.Base","autodetected":{},"files":[{"filename":"base.js","href":"base.html#BUI-Base"}],"abstract":true,"extends":"BUI.Observable","params":[{"tagname":"params","type":"Object","name":"config","doc":"<p>配置项</p>\n","html_type":"<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>"}],"members":[{"name":"handler","tagname":"cfg","owner":"BUI.Observable","id":"cfg-handler","meta":{}},{"name":"listeners","tagname":"cfg","owner":"BUI.Observable","id":"cfg-listeners","meta":{}},{"name":"_eventMap","tagname":"property","owner":"BUI.Observable","id":"property-_eventMap","meta":{"private":true}},{"name":"_events","tagname":"property","owner":"BUI.Observable","id":"property-_events","meta":{"private":true}},{"name":"addAttr","tagname":"method","owner":"BUI.Base","id":"method-addAttr","meta":{"protected":true}},{"name":"addAttrs","tagname":"method","owner":"BUI.Base","id":"method-addAttrs","meta":{"protected":true}},{"name":"addEvents","tagname":"method","owner":"BUI.Observable","id":"method-addEvents","meta":{"protected":true}},{"name":"addTarget","tagname":"method","owner":"BUI.Observable","id":"method-addTarget","meta":{"protected":true}},{"name":"clearAttrVals","tagname":"method","owner":"BUI.Base","id":"method-clearAttrVals","meta":{"protected":true}},{"name":"clearListeners","tagname":"method","owner":"BUI.Observable","id":"method-clearListeners","meta":{"protected":true}},{"name":"fire","tagname":"method","owner":"BUI.Observable","id":"method-fire","meta":{}},{"name":"get","tagname":"method","owner":"BUI.Base","id":"method-get","meta":{}},{"name":"getAttrVals","tagname":"method","owner":"BUI.Base","id":"method-getAttrVals","meta":{"protected":true}},{"name":"getAttrs","tagname":"method","owner":"BUI.Base","id":"method-getAttrs","meta":{"protected":true}},{"name":"hasAttr","tagname":"method","owner":"BUI.Base","id":"method-hasAttr","meta":{"protected":true}},{"name":"off","tagname":"method","owner":"BUI.Observable","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"BUI.Observable","id":"method-on","meta":{}},{"name":"pauseEvent","tagname":"method","owner":"BUI.Observable","id":"method-pauseEvent","meta":{}},{"name":"publish","tagname":"method","owner":"BUI.Observable","id":"method-publish","meta":{"protected":true}},{"name":"removeAttr","tagname":"method","owner":"BUI.Base","id":"method-removeAttr","meta":{"protected":true}},{"name":"resumeEvent","tagname":"method","owner":"BUI.Observable","id":"method-resumeEvent","meta":{}},{"name":"set","tagname":"method","owner":"BUI.Base","id":"method-set","meta":{}},{"name":"setInternal","tagname":"method","owner":"BUI.Base","id":"method-setInternal","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-BUI.Base","short_doc":"基础类，此类提供以下功能\n - 提供设置获取属性\n - 提供事件支持\n - 属性变化时会触发对应的事件\n - 将配置项自动转换成属性\n\n 创建类，继承BUI.Base类 \n\n  var Control = function(cfg){...","component":false,"superclasses":["BUI.Observable"],"subclasses":["BUI.Component.Loader","BUI.Component.UIBase","BUI.Data.AbstractStore","BUI.Data.Proxy","BUI.Data.Sortable","BUI.Form.Rule","BUI.Form.Tips","BUI.Grid.Plugins.AutoFit","BUI.Grid.Plugins.Cascade","BUI.Grid.Plugins.CheckSelection","BUI.Grid.Plugins.ColumnChecked","BUI.Grid.Plugins.ColumnGroup","BUI.Grid.Plugins.GridMenu","BUI.Grid.Plugins.RadioSelection","BUI.Grid.Plugins.RowGroup","BUI.Layout.Abstract","BUI.Layout.Item","BUI.Mask.LoadMask"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='docClass'>BUI.Observable</a><div class='subclass '><strong>BUI.Base</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/BUI.Component.Loader' rel='BUI.Component.Loader' class='docClass'>BUI.Component.Loader</a></div><div class='dependency'><a href='#!/api/BUI.Component.UIBase' rel='BUI.Component.UIBase' class='docClass'>BUI.Component.UIBase</a></div><div class='dependency'><a href='#!/api/BUI.Data.AbstractStore' rel='BUI.Data.AbstractStore' class='docClass'>BUI.Data.AbstractStore</a></div><div class='dependency'><a href='#!/api/BUI.Data.Proxy' rel='BUI.Data.Proxy' class='docClass'>BUI.Data.Proxy</a></div><div class='dependency'><a href='#!/api/BUI.Data.Sortable' rel='BUI.Data.Sortable' class='docClass'>BUI.Data.Sortable</a></div><div class='dependency'><a href='#!/api/BUI.Form.Rule' rel='BUI.Form.Rule' class='docClass'>BUI.Form.Rule</a></div><div class='dependency'><a href='#!/api/BUI.Form.Tips' rel='BUI.Form.Tips' class='docClass'>BUI.Form.Tips</a></div><div class='dependency'><a href='#!/api/BUI.Grid.Plugins.AutoFit' rel='BUI.Grid.Plugins.AutoFit' class='docClass'>BUI.Grid.Plugins.AutoFit</a></div><div class='dependency'><a href='#!/api/BUI.Grid.Plugins.Cascade' rel='BUI.Grid.Plugins.Cascade' class='docClass'>BUI.Grid.Plugins.Cascade</a></div><div class='dependency'><a href='#!/api/BUI.Grid.Plugins.CheckSelection' rel='BUI.Grid.Plugins.CheckSelection' class='docClass'>BUI.Grid.Plugins.CheckSelection</a></div><div class='dependency'><a href='#!/api/BUI.Grid.Plugins.ColumnChecked' rel='BUI.Grid.Plugins.ColumnChecked' class='docClass'>BUI.Grid.Plugins.ColumnChecked</a></div><div class='dependency'><a href='#!/api/BUI.Grid.Plugins.ColumnGroup' rel='BUI.Grid.Plugins.ColumnGroup' class='docClass'>BUI.Grid.Plugins.ColumnGroup</a></div><div class='dependency'><a href='#!/api/BUI.Grid.Plugins.GridMenu' rel='BUI.Grid.Plugins.GridMenu' class='docClass'>BUI.Grid.Plugins.GridMenu</a></div><div class='dependency'><a href='#!/api/BUI.Grid.Plugins.RadioSelection' rel='BUI.Grid.Plugins.RadioSelection' class='docClass'>BUI.Grid.Plugins.RadioSelection</a></div><div class='dependency'><a href='#!/api/BUI.Grid.Plugins.RowGroup' rel='BUI.Grid.Plugins.RowGroup' class='docClass'>BUI.Grid.Plugins.RowGroup</a></div><div class='dependency'><a href='#!/api/BUI.Layout.Abstract' rel='BUI.Layout.Abstract' class='docClass'>BUI.Layout.Abstract</a></div><div class='dependency'><a href='#!/api/BUI.Layout.Item' rel='BUI.Layout.Item' class='docClass'>BUI.Layout.Item</a></div><div class='dependency'><a href='#!/api/BUI.Mask.LoadMask' rel='BUI.Mask.LoadMask' class='docClass'>BUI.Mask.LoadMask</a></div><h4>Files</h4><div class='dependency'><a href='source/base.html#BUI-Base' target='_blank'>base.js</a></div></pre><div class='doc-contents'><p>基础类，此类提供以下功能\n - 提供设置获取属性\n - 提供事件支持\n - 属性变化时会触发对应的事件\n - 将配置项自动转换成属性</p>\n\n<p><strong> 创建类，继承<a href=\"#!/api/BUI.Base\" rel=\"BUI.Base\" class=\"docClass\">BUI.Base</a>类 </strong></p>\n\n<pre><code>  var Control = function(cfg){\n    Control.superclass.constructor.call(this,cfg); //调用<a href=\"#!/api/BUI.Base\" rel=\"BUI.Base\" class=\"docClass\">BUI.Base</a>的构造方法，将配置项变成属性\n  };\n\n  <a href=\"#!/api/BUI-method-extend\" rel=\"BUI-method-extend\" class=\"docClass\">BUI.extend</a>(Control,<a href=\"#!/api/BUI.Base\" rel=\"BUI.Base\" class=\"docClass\">BUI.Base</a>);\n</code></pre>\n\n\n<p><strong> 声明默认属性 </strong></p>\n\n<pre><code>  Control.ATTRS = {\n    id : {\n      value : 'id' //value 是此属性的默认值\n    },\n    renderTo : {\n\n    },\n    el : {\n      valueFn : function(){                 //第一次调用的时候将renderTo的DOM转换成el属性\n        return $(this.get('renderTo'));\n      }\n    },\n    text : {\n      getter : function(){ //getter 用于获取值，而不是设置的值\n        return this.get('el').val();\n      },\n      setter : function(v){ //不仅仅是设置值，可以进行相应的操作\n        this.get('el').val(v);\n      }\n    }\n  };\n</code></pre>\n\n\n<p><strong> 声明类的方法 </strong></p>\n\n<pre><code>  <a href=\"#!/api/BUI-method-augment\" rel=\"BUI-method-augment\" class=\"docClass\">BUI.augment</a>(Control,{\n    getText : function(){\n      return this.get('text');   //可以用get方法获取属性值\n    },\n    setText : function(txt){\n      this.set('text',txt);      //使用set 设置属性值\n    }\n  });\n</code></pre>\n\n\n<p><strong> 创建对象 </strong></p>\n\n<pre><code>  var c = new Control({\n    id : 'oldId',\n    text : '测试文本',\n    renderTo : '#t1'\n  });\n\n  var el = c.get(el); //$(#t1);\n  el.val(); //text的值 ： '测试文本'\n  c.set('text','修改的值');\n  el.val();  //'修改的值'\n\n  c.set('id','newId') //会触发2个事件： beforeIdChange,afterIdChange 2个事件 ev.newVal 和ev.prevVal标示新旧值\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-handler' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-handler' class='name expandable'>handler</a> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><span class=\"signature\"></span></div><div class='description'><div class='short'>点击事件的处理函数，快速配置点击事件而不需要写listeners属性\n\n   var list = new BUI.List.SimpleList({\n     handler : function(ev){} //click 事件\n...</div><div class='long'><p>点击事件的处理函数，快速配置点击事件而不需要写listeners属性</p>\n\n<pre><code>   var list = new <a href=\"#!/api/BUI.List.SimpleList\" rel=\"BUI.List.SimpleList\" class=\"docClass\">BUI.List.SimpleList</a>({\n     handler : function(ev){} //click 事件\n   });\n   list.render();\n </code></pre>\n\n</div></div></div><div id='cfg-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-listeners' class='name expandable'>listeners</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>初始化事件,快速注册事件\n\n   var list = new BUI.List.SimpleList({\n     listeners : {\n       itemclick : function(ev){},\n       it...</div><div class='long'><p>初始化事件,快速注册事件</p>\n\n<pre><code>   var list = new <a href=\"#!/api/BUI.List.SimpleList\" rel=\"BUI.List.SimpleList\" class=\"docClass\">BUI.List.SimpleList</a>({\n     listeners : {\n       itemclick : function(ev){},\n       itemrendered : function(ev){}\n     },\n     items : []\n   });\n   list.render();\n </code></pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_eventMap' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-property-_eventMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_eventMap' class='name expandable'>_eventMap</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>绑定的事件 ...</div><div class='long'><p>绑定的事件</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-_events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-property-_events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_events' class='name expandable'>_events</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>支持的事件名列表 ...</div><div class='long'><p>支持的事件名列表</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addAttr' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-addAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-addAttr' class='name expandable'>addAttr</a>( <span class='pre'>name, attrConfig, overrides</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加属性定义 ...</div><div class='long'><p>添加属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>attrConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性定义</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否覆盖字段</p>\n</div></li></ul></div></div></div><div id='method-addAttrs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-addAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-addAttrs' class='name expandable'>addAttrs</a>( <span class='pre'>attrConfigs, initialValues, overrides</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加属性定义 ...</div><div class='long'><p>添加属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrConfigs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>An object with attribute name/configuration pairs.</p>\n</div></li><li><span class='pre'>initialValues</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>user defined initial values</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否覆盖字段</p>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>events</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加支持的事件 ...</div><div class='long'><p>添加支持的事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<div class='sub-desc'><p>事件</p>\n</div></li></ul></div></div></div><div id='method-addTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-addTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addTarget' class='name expandable'>addTarget</a>( <span class='pre'>target</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加冒泡的对象 ...</div><div class='long'><p>添加冒泡的对象</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>冒泡的事件源</p>\n</div></li></ul></div></div></div><div id='method-clearAttrVals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-clearAttrVals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-clearAttrVals' class='name expandable'>clearAttrVals</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>清理所有属性值 ...</div><div class='long'><p>清理所有属性值</p>\n</div></div></div><div id='method-clearListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-clearListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-clearListeners' class='name expandable'>clearListeners</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>移除所有绑定的事件 ...</div><div class='long'><p>移除所有绑定的事件</p>\n</div></div></div><div id='method-fire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-fire' class='name expandable'>fire</a>( <span class='pre'>eventType, eventData</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined<span class=\"signature\"></span></div><div class='description'><div class='short'>触发事件\n\n  //绑定事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //触发事件\n  list.fire('itemclick'); ...</div><div class='long'><p>触发事件</p>\n\n<pre><code>  //绑定事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //触发事件\n  list.fire('itemclick');\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>eventData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件触发时传递的数据</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</span><div class='sub-desc'><p>如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取属性值，所有的配置项和属性都可以通过get方法获取\n\n var control = new Control({\n  text : 'control text'\n });\n control.get('text'); //contro...</div><div class='long'><p>获取属性值，所有的配置项和属性都可以通过get方法获取</p>\n\n<pre><code> var control = new Control({\n  text : 'control text'\n });\n control.get('text'); //control text\n\n control.set('customValue','value'); //临时变量\n control.get('customValue'); //value\n</code></pre>\n\n\n<p><strong> 属性值/配置项 </strong></p>\n\n<pre><code>  Control.ATTRS = { //声明属性值\n    text : {\n      valueFn : function(){},\n      value : 'value',\n      getter : function(v){}\n    }\n  };\n  var c = new Control({\n    text : 'text value'\n  });\n  //get 函数取的顺序为：是否有修改值（配置项、set)、默认值（第一次调用执行valueFn)，如果有getter，则将值传入getter返回\n\n  c.get('text') //text value\n  c.set('text','new text');//修改值\n  c.get('text');//new text\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性值</p>\n</div></li></ul></div></div></div><div id='method-getAttrVals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-getAttrVals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-getAttrVals' class='name expandable'>getAttrVals</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取属性名/属性值键值对 ...</div><div class='long'><p>获取属性名/属性值键值对</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性对象</p>\n</div></li></ul></div></div></div><div id='method-getAttrs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-getAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-getAttrs' class='name expandable'>getAttrs</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取默认的属性值 ...</div><div class='long'><p>获取默认的属性值</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性值的键值对</p>\n</div></li></ul></div></div></div><div id='method-hasAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-hasAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-hasAttr' class='name expandable'>hasAttr</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>是否包含此属性 ...</div><div class='long'><p>是否包含此属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否包含</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-off' class='name expandable'>off</a>( <span class='pre'>eventType, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移除绑定的事件\n\n //移除所有事件\n list.off();\n\n //移除特定事件\n function callback(ev){}\n list.on('click',callback);\n\n list.off('click',ca...</div><div class='long'><p>移除绑定的事件</p>\n\n<pre><code> //移除所有事件\n list.off();\n\n //移除特定事件\n function callback(ev){}\n list.on('click',callback);\n\n list.off('click',callback);//需要保存回调函数的引用\n\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventType, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加绑定事件\n\n  //绑定单个事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //绑定多个事件\n  list.on('itemrendered item...</div><div class='long'><p>添加绑定事件</p>\n\n<pre><code>  //绑定单个事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //绑定多个事件\n  list.on('itemrendered itemupdated',function(){\n    //列表项创建、更新时触发操作\n  });\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-pauseEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-pauseEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-pauseEvent' class='name expandable'>pauseEvent</a>( <span class='pre'>eventType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>暂停事件的执行\n\n list.pauseEvent('itemclick'); ...</div><div class='long'><p>暂停事件的执行</p>\n\n<pre><code> list.pauseEvent('itemclick');\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li></ul></div></div></div><div id='method-publish' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-publish' class='name expandable'>publish</a>( <span class='pre'>eventType, cfg</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>配置事件是否允许冒泡 ...</div><div class='long'><p>配置事件是否允许冒泡</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>支持冒泡的事件</p>\n</div></li><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n<ul><li><span class='pre'>bubbles</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否支持冒泡</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-removeAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-removeAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-removeAttr' class='name expandable'>removeAttr</a>( <span class='pre'>name</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>移除属性定义 ...</div><div class='long'><p>移除属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-resumeEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-resumeEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-resumeEvent' class='name expandable'>resumeEvent</a>( <span class='pre'>eventType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>唤醒事件\n\n list.resumeEvent('itemclick'); ...</div><div class='long'><p>唤醒事件</p>\n\n<pre><code> list.resumeEvent('itemclick');\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-set' class='name expandable'>set</a>( <span class='pre'>name, value, opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置属性值，会触发before+Name+Change,和 after+Name+Change事件\n\n control.on('beforeTextChange',function(ev){\n   var newVal = ev.ne...</div><div class='long'><p>设置属性值，会触发before+Name+Change,和 after+Name+Change事件</p>\n\n<pre><code> control.on('beforeTextChange',function(ev){\n   var newVal = ev.newVal,\n     attrName = ev.attrName,\n     preVal = ev.prevVal;\n\n   //TO DO\n });\n control.set('text','new text');  //此时触发 beforeTextChange,afterTextChange\n control.set('text','modify text',{silent : true}); //此时不触发事件\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>值</p>\n</div></li><li><span class='pre'>opts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n<ul><li><span class='pre'>silent</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>配置属性时，是否不触发事件</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-setInternal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Base'>BUI.Base</span><br/><a href='source/base.html#BUI-Base-method-setInternal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-setInternal' class='name expandable'>setInternal</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined<span class=\"signature\"></span></div><div class='description'><div class='short'>设置属性，不触发事件\n\n control.setInternal('text','text');//此时不触发事件 ...</div><div class='long'><p>设置属性，不触发事件</p>\n\n<pre><code> control.setInternal('text','text');//此时不触发事件\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</span><div class='sub-desc'><p>如果值无效则返回false,否则返回undefined</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});