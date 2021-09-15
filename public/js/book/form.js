document.saveForm.addEventListener('submit', onSubmit)
function onSubmit(e) {
	e.preventDefault()
	var title = this.title.value.trim()
	var writer = this.writer.value.trim()
	var content = this.content.value.trim()
	if(!title) {
		alert('도서명을 입력하세요.')
		this.title.focus()
		return false
	}
	this.submit()
}

// /언어/book/ www.myshop.co.kr 	:3000
// /book/			 api.myshop.co.kr 	:3001 
// /					 admin.myshop.co.kr :3002

document.querySelector('#btRemoveFile').addEventListener('click', onRemoveFile)
document.querySelector('#btRemoveCover').addEventListener('click', onRemoveFile)

function onRemoveFile(e) {
	var idx = this.dataset['idx'];
	var parent = this.parentNode;
	var host = 'http://127.0.0.1:3001';
	axios.delete(hots+'/book/file/'+ idx).then(onSuccess).catch(onError)
	function onSuccess(r) {
		if(r.data.code === 200) parent.remove()
	}
	
	function onError(err) {
	console.log(err)
	console.log(err.response)
	}
}
