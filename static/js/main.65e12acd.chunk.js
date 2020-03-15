(this["webpackJsonpblog-context-api"]=this["webpackJsonpblog-context-api"]||[]).push([[0],{79:function(e,t,a){e.exports=a(91)},84:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),o=a.n(s),c=(a(84),a(34)),i=a(26),l=a(9),m=a(10),d=a(12),u=a(11),p=a(13),h=a(16),g=a(31),f=a(25),C=a.n(f),E={home:"".concat("/blog-context-api/"),auth:"".concat("/blog-context-api/","auth"),create:"".concat("/blog-context-api/","create"),postById:"".concat("/blog-context-api/","post")},v=a(41);var b=function(e){return r.a.createElement(v.a,e,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))},x=a(118),O=a(119),j=a(121),S=a(122),y=a(120),N="Blog",I="Create Post",w="Log in",k="Log out",P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleCreatePostClick=function(e){var t=a.props,n=t.isLoggedIn,r=t.handleCreatePostClick;n||r(e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.isLoggedIn;return r.a.createElement(x.a,{position:"static"},r.a.createElement(O.a,{className:a.toolbar},r.a.createElement(h.b,{to:E.home,className:a.logo},r.a.createElement(y.a,{edge:"start",color:"inherit","aria-label":"blog",onClick:function(t){return e.handleCreatePostClick(!1,t)}},r.a.createElement(b,{fontSize:"large"}),r.a.createElement(j.a,{variant:"h4"},N))),r.a.createElement(h.b,{to:E.create,className:a.createPostLink},r.a.createElement(S.a,{className:a.linkBtn,color:"inherit",size:"large",onClick:function(){return e.handleCreatePostClick(!0)}},I)),r.a.createElement(h.b,{to:E.auth,className:a.authLink},n?r.a.createElement(S.a,{className:a.linkBtn,size:"large"},k):r.a.createElement(S.a,{className:a.linkBtn,size:"large",onClick:function(){return e.handleCreatePostClick(!1)}},w))))}}]),t}(r.a.Component),L=a(4),U=Object(L.a)({toolbar:{display:"flex",justifyContent:"flex-start"},logo:{color:"white",textDecoration:"none"},createPostLink:{marginLeft:"40px",textDecoration:"none"},authLink:{marginLeft:"auto",textDecoration:"none"},linkBtn:{color:"white"}})(P),A=a(127),D="Log in",T="* Username",W="* Password",B="Log In",F="* Username is empty",M="* Password is empty",J="* Password is incorrect",R=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onUsernameChange=function(e){a.setState({username:e.target.value,isUsernameEmpty:!1})},a.onPasswordChange=function(e){a.setState({password:e.target.value,isPasswordEmpty:!1,isPasswordCorrect:!0})},a.passUser=function(e,t,a,n,r){t(!0,e),r?(a.push(E.create),n(!1)):a.push(E.home)},a.handleSubmitOnEnter=function(e){"Enter"===e.key&&a.handleLogIn()},a.handleLogIn=function(){var e=a.state,t=e.username,n=e.password,r=e.users,s=a.props,o=s.handleLogIn,c=s.history,i=s.isCreatePostClicked,l=s.handleCreatePostClick;if(t||n)if(t)if(n){var m={username:t.trim(),password:n};r.some((function(e){return e.username===m.username}))?r.forEach((function(e){e.password===m.password?a.setState({username:"",password:"",isUsernameEmpty:!1,isPasswordEmpty:!1,isPasswordCorrect:!0},(function(){a.passUser(m,o,c,l,i)})):a.setState({isPasswordCorrect:!1})})):a.passUser(m,o,c,l,i)}else a.setState({isPasswordEmpty:!0});else a.setState({isUsernameEmpty:!0});else a.setState({isUsernameEmpty:!0,isPasswordEmpty:!0})};var n=e.users||[];return a.state={username:"",password:"",isUsernameEmpty:!1,isPasswordEmpty:!1,isPasswordCorrect:!0,users:n},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,s=t.isUsernameEmpty,o=t.isPasswordEmpty,c=t.isPasswordCorrect,i=this.props.classes;return r.a.createElement("div",{className:i.loginContainer},r.a.createElement("div",{className:i.loginContent},r.a.createElement("div",{className:i.titleSection},r.a.createElement(j.a,{variant:"h4",className:i.title},D)),r.a.createElement("div",null,r.a.createElement("div",{className:i.usernameInput},r.a.createElement(A.a,{id:"standard-basic",label:s?F:T,error:s,fullWidth:!0,value:a,onChange:function(t){return e.onUsernameChange(t)},onKeyDown:this.handleSubmitOnEnter})),r.a.createElement("div",{className:i.passwordInput},r.a.createElement(A.a,{id:"standard-password-input",label:c?o?M:W:J,error:o||!c,type:"password",autoComplete:"current-password",fullWidth:!0,value:n,onChange:function(t){return e.onPasswordChange(t)},onKeyDown:this.handleSubmitOnEnter})),r.a.createElement("div",{className:i.loginBtn},r.a.createElement(S.a,{variant:"contained",size:"large",color:"primary",fullWidth:!0,onClick:this.handleLogIn},B)))))}}]),t}(r.a.Component),z="There is no post on web-site.",Y="Log in",G=" and be our first story teller.",K="share your story!",V="You've logged in, ";var H=function(e){var t=e.classes,a=e.isLoggedIn;return r.a.createElement("div",{className:t.homeContainer},r.a.createElement("div",{className:t.homeContent},r.a.createElement("div",{className:t.titleSection},r.a.createElement(j.a,{variant:"h5",className:t.title},z)),r.a.createElement("div",{className:t.textSection},a?r.a.createElement(j.a,{variant:"h4",className:t.text},V," ",r.a.createElement(h.b,{to:E.create},K)):r.a.createElement(j.a,{variant:"h4",className:t.text},r.a.createElement(h.b,{to:E.auth},Y),G)),r.a.createElement(g.b,{path:E.auth},r.a.createElement(R,null))))},$=Object(L.a)({homeContainer:{display:"flex",justifyContent:"center"},homeContent:{width:"50%"},titleSection:{marginTop:"20px",textAlign:"center"},title:{fontWeight:"bold"},textSection:{marginTop:"40px",textAlign:"center"},text:{fontWeight:"bold"}})(H),q=function(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(a){return}},Q=function(e,t){try{var a=JSON.stringify(t);localStorage.setItem(e,a)}catch(n){throw new Error("Can't save changes in local storage")}},X=a(123),Z=a(124),_=a(28),ee=a.n(_),te=a(125),ae="Tell us your story!",ne=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],re=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onTitleChange=function(e){a.setState({title:e.target.value})},a.onContentChange=function(e){a.setState({content:e.target.value})},a.onPostAdd=function(){var e=new Date,t=ne[e.getMonth()]+" "+e.getDate()+" "+e.getFullYear();a.setState((function(e){return{posts:[{id:e.currentId,title:e.title,content:e.content,date:t,userId:e.currentUserId}].concat(Object(c.a)(e.posts)),currentId:C()(),title:"",content:""}}),(function(){Q("posts",a.state.posts),a.props.handlePostAdd(a.state.posts),a.props.history.push(E.home)}))};var n=C()(),r=q("posts")||[];return a.state={title:"",content:"",posts:r,currentId:n,currentUserId:a.props.currentUserId},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.content,s=this.props.classes;return r.a.createElement("div",{className:s.createPostContainer},r.a.createElement("div",{className:s.createPostContent},r.a.createElement(X.a,{className:s.cardSection},r.a.createElement(Z.a,null,r.a.createElement(j.a,{className:s.title,variant:"h6",gutterBottom:!0},ae),r.a.createElement("div",null,r.a.createElement(A.a,{className:s.titleTextField,placeholder:"Write the title...",id:"standard-basic",label:"* Title",value:a,onChange:function(t){return e.onTitleChange(t)}})),r.a.createElement("div",{className:s.contentDiv},r.a.createElement(A.a,{className:s.contentTextField,placeholder:"Write the post...",id:"standard-multiline-static",label:"* Content",multiline:!0,rows:"10",value:n,onChange:function(t){return e.onContentChange(t)}})),r.a.createElement("div",{className:s.btnDiv},r.a.createElement(te.a,{color:"primary",onClick:this.onPostAdd},r.a.createElement(ee.a,null)))))))}}]),t}(r.a.Component),se=Object(g.g)(Object(L.a)({createPostContainer:{display:"flex",justifyContent:"center"},createPostContent:{width:"75%"},cardSection:{margin:"20px",boxShadow:"0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"},title:{textAlign:"center"},titleTextField:{width:"75%"},contentDiv:{margin:"16px 0"},contentTextField:{width:"100%"},btnDiv:{display:"flex",justifyContent:"flex-end"}})(re)),oe=a(73),ce=Object(g.g)(Object(L.a)({loginContainer:{display:"flex",justifyContent:"center"},loginContent:{width:"50%"},titleSection:{marginTop:"20px"},title:{fontWeight:"bold"},usernameInput:{marginTop:"16px",marginBottom:"8px"},passwordInput:{marginTop:"16px",marginBottom:"8px"},loginBtn:{margin:"30px 0"}})(R)),ie="Log out",le="Are you sure you want to log out?",me="Log out",de=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleLogOut=function(){var e=a.props,t=e.handleLogOut,n=e.isCreatePostClicked,r=e.handleCreatePostClick;t(!1),n&&r(!1)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.logoutContainer},r.a.createElement("div",{className:t.logoutContent},r.a.createElement("div",{className:t.logoutTitleSection},r.a.createElement(j.a,{variant:"h4",className:t.title},ie)),r.a.createElement("div",{className:t.logoutText},r.a.createElement(j.a,{variant:"h6"},le)),r.a.createElement("div",null,r.a.createElement(S.a,{variant:"contained",size:"large",color:"primary",onClick:function(){return e.handleLogOut()}},me))))}}]),t}(r.a.Component),ue=Object(L.a)({logoutContainer:{display:"flex",justifyContent:"center"},logoutContent:{display:"flex",flexDirection:"column",alignItems:"center",width:"50%"},logoutTitleSection:{margin:"20px 0"},title:{fontWeight:"bold"},logoutText:{margin:"16px 0"}})(de);var pe=function(e){var t=e.component,a=Object(oe.a)(e,["component"]),n=a.isLoggedIn,s=a.path,o=a.handleLogIn,c=a.handleLogOut,i=a.handleCreatePostClick,l=a.isCreatePostClicked,m=a.currentUserId,d=a.handlePostAdd,u=a.posts,p=a.users,h=a.computedMatch;return s===E.auth?n?r.a.createElement(g.b,{path:s},r.a.createElement(ue,{handleLogOut:c,isCreatePostClicked:l,handleCreatePostClick:i})):r.a.createElement(g.b,{path:s},r.a.createElement(ce,{users:p,handleLogIn:o,isCreatePostClicked:l,handleCreatePostClick:i})):n?r.a.createElement(g.b,{path:s},r.a.createElement(t,Object.assign({currentUserId:m,handlePostAdd:d,posts:u},a,{postId:h.params.id}))):r.a.createElement(g.a,{to:{pathname:E.auth}})},he=a(48),ge={postContainer:{display:"flex",justifyContent:"center"},cardSection:{width:"75%"},cardWrapper:{margin:"20px",padding:"20px",boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"},CardContent:{padding:0},titleSection:{display:"flex",padding:"16px 24px"},avatarSection:{margin:"auto 16px auto 0"},avatar:{backgroundColor:he.a[500]},contentSection:{padding:"16px 24px"},CardActions:{justifyContent:"flex-end"},learnMoreLink:{textDecoration:"none"}},fe=a(126),Ce=a(128);var Ee=function(e){var t=e.classes,a=e.post,n=a.title,s=a.content,o=a.date,c=a.userId,i=a.id,l=q("users").find((function(e){return e.id===c})),m=l.username[0].toUpperCase();return r.a.createElement("div",{className:t.postContainer},r.a.createElement("div",{className:t.cardSection},r.a.createElement(X.a,{className:t.cardWrapper},r.a.createElement(Z.a,{className:t.CardContent},r.a.createElement("div",{className:t.titleSection},r.a.createElement("div",{className:t.avatarSection},r.a.createElement(Ce.a,{className:t.avatar},m)),r.a.createElement("div",null,r.a.createElement(j.a,{gutterBottom:!0},n),r.a.createElement(j.a,{variant:"subtitle2",color:"textSecondary"},o," by ",l.username))),r.a.createElement("div",{className:t.contentSection},r.a.createElement(j.a,null,s))),r.a.createElement(fe.a,{className:t.CardActions},r.a.createElement(h.b,{to:"".concat(E.postById,"/").concat(i),className:t.learnMoreLink},r.a.createElement(S.a,{size:"medium",color:"secondary"},"Learn More"))))))},ve=Object(L.a)(ge)(Ee),be="Posts",xe=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(d.a)(this,Object(u.a)(t).call(this,e));var n=q("posts")||[];return a.state={posts:n},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.posts,t=this.props.classes;return r.a.createElement("div",{className:t.postsContainer},r.a.createElement("div",{className:t.titleSection},r.a.createElement(j.a,{className:t.title,variant:"h4"},be)),r.a.createElement("div",{className:t.postSection},r.a.createElement("ul",{className:t.ul},e.map((function(e){return r.a.createElement(ve,{key:e.id,post:e})})))))}}]),t}(r.a.Component),Oe=Object(L.a)({postsContainer:{display:"flex",flexDirection:"column",alignItems:"center"},titleSection:{margin:"20px"},title:{fontWeight:"bold"},postSection:{width:"100%"},ul:{padding:0,margin:0}})(xe),je={postContainer:{display:"flex",justifyContent:"center"},cardSection:{width:"75%"},cardWrapper:{margin:"20px",padding:"20px",boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"},CardContent:{padding:0},titleSection:{display:"flex",padding:"16px 24px"},avatarSection:{margin:"auto 16px auto 0"},avatar:{backgroundColor:he.a[500]},editIcon:{marginLeft:"auto"},contentSection:{padding:"16px 24px"},contentTextField:{width:"100%"},CardActions:{justifyContent:"flex-end"},buttonsSection:{display:"flex"},btnDiv:{marginLeft:"20px"}},Se=a(45),ye=a.n(Se),Ne=a(46),Ie=a.n(Ne),we=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onContentChange=function(e){a.setState({content:e.target.value})},a.handleIsEdit=function(){a.onSubmit()},a.onRemove=function(){a.setState((function(e){return{posts:e.posts.filter((function(t){return t.id!==e.post.id})),comments:e.comments.filter((function(t){return t.postId!==e.post.id}))}}),(function(){Q("posts",a.state.posts),Q("comments",a.state.comments),a.props.history.push(E.home)}))},a.onSubmit=function(){a.setState((function(e){return{post:Object(i.a)({},e.post,{content:e.content})}}),(function(){return a.setState((function(e){return{posts:e.posts.map((function(t){return t.id===e.post.id?e.post:t})),isEdit:!e.isEdit}}),(function(){return Q("posts",a.state.posts)}))}))};var n=a.props,r=n.posts,s=n.post,o=n.comments,c=n.currentUserId,m=s.content,p=q("users"),h=p.find((function(e){return e.id===s.userId}));return a.state={posts:r,post:s,content:m,comments:o,currentUserId:c,users:p,user:h,isEdit:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.content,n=t.isEdit,s=t.user,o=t.currentUserId,c=this.props.classes,i=this.state.post,l=i.title,m=i.date,d=s.username[0].toUpperCase(),u=o===s.id;return r.a.createElement("div",{className:c.postContainer},r.a.createElement("div",{className:c.cardSection},r.a.createElement(X.a,{className:c.cardWrapper},r.a.createElement(Z.a,{className:c.CardContent},r.a.createElement("div",{className:c.titleSection},r.a.createElement("div",{className:c.avatarSection},r.a.createElement(Ce.a,{className:c.avatar},d)),r.a.createElement("div",null,r.a.createElement(j.a,{gutterBottom:!0},l),r.a.createElement(j.a,{variant:"subtitle2",color:"textSecondary"},m," by ",s.username)),r.a.createElement("div",{className:c.editIcon},r.a.createElement(y.a,{onClick:function(){return e.handleIsEdit()},disabled:!u},r.a.createElement(ye.a,null)))),r.a.createElement("div",{className:c.contentSection},n?r.a.createElement(A.a,{className:c.contentTextField,placeholder:"Write the post...",id:"standard-multiline-static",label:"Post",multiline:!0,rows:"5",value:a,onChange:function(t){return e.onContentChange(t)}}):r.a.createElement(j.a,null,a))),r.a.createElement(fe.a,{className:c.CardActions},r.a.createElement("div",{className:c.buttonsSection},r.a.createElement("div",{className:c.btnDiv},r.a.createElement(te.a,{onClick:this.onRemove,disabled:!u,color:"secondary"},r.a.createElement(Ie.a,null))),r.a.createElement("div",{className:c.btnDiv},r.a.createElement(te.a,{color:"primary",disabled:!n,onClick:this.onSubmit},r.a.createElement(ee.a,null))))))))}}]),t}(r.a.Component),ke=Object(g.g)(Object(L.a)(je)(we)),Pe=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],Le=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onCommentChange=function(e){a.setState({comment:e.target.value})},a.onCommentAdd=function(){var e=a.state,t=e.currentId,n=e.comment,r=e.userId,s=e.postId,o=new Date,c={id:t,comment:n,date:Pe[o.getMonth()]+" "+o.getDate()+" "+o.getFullYear(),userId:r,postId:s};a.setState({comment:"",currentId:C()()},(function(){a.props.onCommentAdd(c)}))};var n=C()();return a.state={comment:"",currentId:n,postId:a.props.post.id,userId:a.props.currentUserId},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.comment,a=this.props.classes;return r.a.createElement("div",{className:a.createCommentContainer},r.a.createElement("div",{className:a.createCommentContent},r.a.createElement("div",{className:a.commentDiv},r.a.createElement(A.a,{className:a.commentTextField,placeholder:"Write the comment...",id:"standard-multiline-static",label:"* Comment",multiline:!0,rows:"4",value:t,onChange:function(t){return e.onCommentChange(t)}})),r.a.createElement("div",{className:a.btnDiv},r.a.createElement(te.a,{color:"primary",onClick:this.onCommentAdd,disabled:!t},r.a.createElement(ee.a,null)))))}}]),t}(r.a.Component),Ue=Object(L.a)({createCommentContainer:{display:"flex",justifyContent:"center"},createCommentContent:{width:"75%"},commentDiv:{margin:"16px 0"},commentTextField:{width:"100%"},btnDiv:{display:"flex",justifyContent:"flex-end"}})(Le),Ae={postContainer:{display:"flex",justifyContent:"center"},cardSection:{width:"75%"},cardWrapper:{margin:"20px",padding:"20px",boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"},CardContent:{padding:0},titleSection:{display:"flex",padding:"16px 24px"},avatarSection:{margin:"auto 16px auto 0"},avatar:{backgroundColor:he.a[500]},userSection:{display:"flex",alignItems:"center"},editIcon:{marginLeft:"auto"},commentSection:{padding:"16px 24px"},commentTextField:{width:"100%"},CardActions:{justifyContent:"flex-end"},buttonsSection:{display:"flex"}},De=a(32),Te=r.a.createContext(null);var We=function(e){var t=Object(n.useContext)(Te),a=Object(n.useState)(e.comment),s=Object(De.a)(a,2),o=s[0],c=s[1],l=Object(n.useState)(t.comments),m=Object(De.a)(l,2),d=m[0],u=m[1],p=Object(n.useState)(o.comment),h=Object(De.a)(p,2),g=h[0],f=h[1],C=Object(n.useState)(t.currentUserId),E=Object(De.a)(C,1)[0],v=Object(n.useState)(q("users")),b=Object(De.a)(v,1)[0],x=Object(n.useState)(b.find((function(e){return e.id===o.userId}))),O=Object(De.a)(x,1)[0],S=Object(n.useState)(!1),N=Object(De.a)(S,2),I=N[0],w=N[1];Object(n.useEffect)((function(){u(d.map((function(e){return e.id===o.id?Object(i.a)({},o,{comment:g}):e})))}),[o]),Object(n.useEffect)((function(){Q("comments",d)}),[d]);var k=function(){c((function(e){return Object(i.a)({},e,{comment:g})})),w(!I)},P=e.classes,L=o.date,U=O.username[0].toUpperCase(),D=E===O.id;return r.a.createElement("div",{className:P.postContainer},r.a.createElement("div",{className:P.cardSection},r.a.createElement(X.a,{className:P.cardWrapper},r.a.createElement(Z.a,{className:P.CardContent},r.a.createElement("div",{className:P.titleSection},r.a.createElement("div",{className:P.avatarSection},r.a.createElement(Ce.a,{className:P.avatar},U)),r.a.createElement("div",{className:P.userSection},r.a.createElement(j.a,{variant:"subtitle2",color:"textSecondary"},L," by ",O.username)),r.a.createElement("div",{className:P.editIcon},r.a.createElement(y.a,{onClick:function(){k()},disabled:!D},r.a.createElement(ye.a,null)))),r.a.createElement("div",{className:P.commentSection},I?r.a.createElement(A.a,{className:P.commentTextField,placeholder:"Write the comment...",id:"standard-multiline-static",label:"Comment",multiline:!0,rows:"5",value:g,onChange:function(e){f(e.target.value)}}):r.a.createElement(j.a,null,g))),r.a.createElement(fe.a,{className:P.CardActions},r.a.createElement("div",{className:P.buttonsSection},r.a.createElement("div",{className:P.btnDiv},r.a.createElement(y.a,{onClick:function(){t.onCommentRemove(o)},disabled:!D,color:"secondary"},r.a.createElement(Ie.a,null))),r.a.createElement("div",null,r.a.createElement(y.a,{disabled:!I,onClick:k,color:"primary"},r.a.createElement(ee.a,null))))))))},Be=Object(L.a)(Ae)(We);var Fe=function(e){var t=e.classes,a=e.comments,n=e.postId,s=a.filter((function(e){return e.postId===n}));return r.a.createElement("div",{className:t.postsContainer},r.a.createElement("div",{className:t.postSection},r.a.createElement("ul",{className:t.ul},s.map((function(e){return r.a.createElement(Be,{key:e.id,comment:e})})))))},Me=Object(L.a)({postsContainer:{display:"flex",flexDirection:"column",alignItems:"center"},postSection:{width:"100%"},ul:{padding:0,margin:0}})(Fe),Je="Post",Re="Comments",ze=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onCommentAdd=function(e){a.setState((function(t){return{comments:[e].concat(Object(c.a)(t.comments))}}),(function(){Q("comments",a.state.comments)}))},a.onCommentRemove=function(e){a.setState((function(t){return{comments:t.comments.filter((function(t){return t.id!==e.id}))}}),(function(){return Q("comments",a.state.comments)}))};var n=q("posts")||[],r=n.find((function(e){return e.id===a.props.postId})),s=q("comments")||[];return a.state={posts:n,post:r,comments:s},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.posts,a=e.post,n=e.comments,s=this.props,o=s.classes,c=s.currentUserId,i=s.postId;return r.a.createElement("div",{className:o.postsContainer},r.a.createElement("div",{className:o.titleSection},r.a.createElement(j.a,{className:o.title,variant:"h4"},Je)),r.a.createElement("div",{className:o.postSection},r.a.createElement(ke,{key:a.id,post:a,posts:t,comments:n,currentUserId:c})),r.a.createElement("div",{className:o.titleSection},r.a.createElement(j.a,{className:o.title,variant:"h5"},Re)),r.a.createElement("div",{className:o.createCommentSection},r.a.createElement(Ue,{post:a,onCommentAdd:this.onCommentAdd,comments:n,currentUserId:c})),r.a.createElement("div",{className:o.commentsSection},r.a.createElement(Te.Provider,{value:{comments:n,currentUserId:c,onCommentRemove:this.onCommentRemove}},r.a.createElement(Me,{comments:n,postId:i}))))}}]),t}(r.a.Component),Ye=Object(L.a)({postsContainer:{display:"flex",flexDirection:"column",alignItems:"center"},titleSection:{margin:"10px",alignSelf:"flex-start",marginLeft:"12%"},title:{fontWeight:"bold"},postSection:{width:"100%"},createCommentSection:{width:"75%"},commentsSection:{width:"75%"}})(ze),Ge=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),Ke=Object(g.g)(Ge),Ve=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleLogIn=function(e,t){var n=t.username,r=t.password,s=a.state.users.find((function(e){return e.username===n&&e.password===r}));s?a.setState((function(t){return{users:t.users.map((function(e){return e.id===s.id?Object(i.a)({},e,{isOnline:!0}):Object(i.a)({},e,{isOnline:!1})})),isLoggedIn:e,currentUserId:s.id}}),(function(){return Q("users",a.state.users)})):a.setState((function(t){return{users:[{id:t.currentId,username:n,password:r,isOnline:!0}].concat(Object(c.a)(t.users)),currentId:C()(),isLoggedIn:e,currentUserId:t.currentId}}),(function(){return Q("users",a.state.users)}))},a.handleLogOut=function(e){var t=a.state.users.map((function(e){return Object(i.a)({},e,{isOnline:!1})}));a.setState({users:t,isLoggedIn:e},(function(){return Q("users",a.state.users)}))},a.handleCreatePostClick=function(e){a.setState({isCreatePostClicked:e})},a.handlePostAdd=function(e){a.setState({posts:e})};var n=q("users")||[],r=C()(),s=q("posts")||[],o=n.some((function(e){return e.isOnline})),m=o?n.find((function(e){return e.isOnline})).id:"";return a.state={isLoggedIn:o,users:n,currentId:r,isCreatePostClicked:!1,currentUserId:m,posts:s},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,a=e.isCreatePostClicked,n=e.currentUserId,s=e.posts,o=e.users,c=this.props.classes;return r.a.createElement("div",{className:c.mainContainer},r.a.createElement(h.a,null,r.a.createElement(Ke,null,r.a.createElement(U,{isLoggedIn:t,handleCreatePostClick:this.handleCreatePostClick}),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/"},r.a.createElement(g.a,{to:{pathname:E.home}})),r.a.createElement(g.b,{exact:!0,path:E.home},s.length>0?r.a.createElement(Oe,null):r.a.createElement($,{isLoggedIn:t})),r.a.createElement(pe,{path:E.create,isLoggedIn:t,component:se,currentUserId:n,handlePostAdd:this.handlePostAdd}),r.a.createElement(pe,{path:E.auth,users:o,isLoggedIn:t,isCreatePostClicked:a,handleLogIn:this.handleLogIn,handleLogOut:this.handleLogOut,handleCreatePostClick:this.handleCreatePostClick}),r.a.createElement(pe,{path:"".concat(E.postById,"/:id"),isLoggedIn:t,component:Ye,currentUserId:n,posts:s})))))}}]),t}(r.a.Component),He=Object(L.a)({mainContainer:{backgroundColor:"#f9f9f9",minHeight:"100vh"}})(Ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[79,1,2]]]);
//# sourceMappingURL=main.65e12acd.chunk.js.map