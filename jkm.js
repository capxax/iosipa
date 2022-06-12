if ($request.url.indexOf('hbjkm/flts/hstc.json') != -1) {
    if($response.status!=200){
        
        $done({status: 200, headers: $response.headers, body: '{"tcts":0,"tsxx":"提示","wxtx":"疫情防控"}' })
    }else{
        $done({})
    }
}else{
    $done({})
}
