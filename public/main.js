getcss.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')

  request.onload = () => {
    const style = document.createElement('style')
    //创建style标签
    style.innerHTML = request.response
    //填写内容
    document.head.appendChild(style)
    //插到head标签内
    console.log('成功了')
  }
  request.onerror = () => {
    console.log('失败了')
  }
  request.send()
}
getjs.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')

  request.onload = () => {
    const js = document.createElement('script')
    //创建script标签
    js.innerHTML = request.response
    //填写内容
    document.body.appendChild(js)
    //插到标签内
    console.log('成功了')
  }
  request.onerror = () => {
    console.log('失败了')
  }
  request.send()
}


gethtml.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')

  request.onload = () => {
    const div = document.createElement('div')
    //创建div标签
    div.innerHTML = request.response
    //填写内容
    document.body.appendChild(div)
    //插到body标签内
    console.log('成功了')
  }
  request.onerror = () => {
    console.log('失败了')
  }
  request.send()
}
getxml.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    console.log(request.readyState);
    // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建 style 标签
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("加载 CSS 失败");
      }
    }
  }
  request.send()

}