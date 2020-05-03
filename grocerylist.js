function grains(){
    document.getElementById('heading').innerHTML = "Grains List";
    document.body.style.backgroundImage = "url('https://s3.amazonaws.com/re-work-production/post_images/166/green-wheat-field-wallpaper-3/original.jpg?1461938464')";
    var hr = new XMLHttpRequest();
    hr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var table1 = response.table1;
            var output = "";
            for(var i=0;i<table1.length;i++){
                output += "<tr>";
                output += "<td>"+table1[i].SNo+"</td>";
                output += "<td>"+table1[i].Name+"</td>";
                output += "<td>"+table1[i].Quantity+"</td>";
                output += "<td>"+table1[i].Unit+"</td>";
                output += "<td>"+table1[i].Department+"</td>";
                output += "<td>"+table1[i].Notes+"</td>";
                output += "</tr>";
            }
        }
        document.getElementById("items").innerHTML = output;

    }
    hr.open("GET","product.json",true);
    hr.send();
}

function oil(){
    document.getElementById('heading').innerHTML = "Oil & Butter List";
    document.body.style.backgroundImage = "url('https://ak6.picdn.net/shutterstock/videos/1023494986/thumb/3.jpg')";
    var hr = new XMLHttpRequest();
    hr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var fats1 = response.fats;
            var output = "";
            for(var i=0;i<fats1.length;i++){
                output += "<tr>";
                output += "<td>"+fats1[i].SNo+"</td>";
                output += "<td>"+fats1[i].Name+"</td>";
                output += "<td>"+fats1[i].Quantity+"</td>";
                output += "<td>"+fats1[i].Unit+"</td>";
                output += "<td>"+fats1[i].Department+"</td>";
                output += "<td>"+fats1[i].Notes+"</td>";
                output += "</tr>";
            }
        }
        document.getElementById("items").innerHTML = output;

    }
    hr.open("GET", "product.json", true);
    hr.send();
}

function veg(){
    document.body.style.backgroundImage = "url('https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4245117/910/588/m2/fpnw/wm1/egngk5ww7j1s6xitop6ghvzailzdizz0pkozfzkumuodvmfe857p3xwdbck5as2c-.jpg?1522939627&s=06c3c06ea0d51e2c0a7149d195a618d2')";
    document.getElementById('heading').innerHTML = "Vegetables & Fruits List";
    var hr = new XMLHttpRequest();
    hr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var fruits1 = response.fruits;
            var output = "";
            for(var i=0;i<fruits1.length;i++){
                output += "<tr>";
                output += "<td>"+fruits1[i].SNo+"</td>";
                output += "<td>"+fruits1[i].Name+"</td>";
                output += "<td>"+fruits1[i].Quantity+"</td>";
                output += "<td>"+fruits1[i].Unit+"</td>";
                output += "<td>"+fruits1[i].Department+"</td>";
                output += "<td>"+fruits1[i].Notes+"</td>";
                output += "</tr>";
            }
        }
        document.getElementById("items").innerHTML = output;

    }
    hr.open("GET", "product.json", true);
    hr.send();
}

function dairy(){
    document.body.style.backgroundImage = "URL('https://www.indiafilings.com/learn/wp-content/uploads/2017/06/GST-Rate-for-Milk.jpg')";
    document.getElementById('heading').innerHTML = "Dairy & Egg List";
    var hr = new XMLHttpRequest();
    hr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var dairyEggs1 = response.dairyEggs;
            var output = "";
            for(var i=0;i<dairyEggs1.length;i++){
                output += "<tr>";
                output += "<td>"+dairyEggs1[i].SNo+"</td>";
                output += "<td>"+dairyEggs1[i].Name+"</td>";
                output += "<td>"+dairyEggs1[i].Quantity+"</td>";
                output += "<td>"+dairyEggs1[i].Unit+"</td>";
                output += "<td>"+dairyEggs1[i].Department+"</td>";
                output += "<td>"+dairyEggs1[i].Notes+"</td>";
                output += "</tr>";
            }
        }
        document.getElementById("items").innerHTML = output;

    }
    hr.open("GET", "product.json", true);
    hr.send();
}

function condiments(){
    document.body.style.backgroundImage ="url('https://st4.depositphotos.com/10480078/27146/i/1600/depositphotos_271461166-stock-photo-various-spices-and-condiments-for.jpg')";
    document.getElementById('heading').innerHTML = "Condiments List";
    var hr = new XMLHttpRequest();
    hr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var condi1 = response.condi;
            var output = "";
            for(var i=0;i<condi1.length;i++){
                output += "<tr>";
                output += "<td>"+condi1[i].SNo+"</td>";
                output += "<td>"+condi1[i].Name+"</td>";
                output += "<td>"+condi1[i].Quantity+"</td>";
                output += "<td>"+condi1[i].Unit+"</td>";
                output += "<td>"+condi1[i].Department+"</td>";
                output += "<td>"+condi1[i].Notes+"</td>";
                output += "</tr>";
            }
        }
        document.getElementById("items").innerHTML = output;

    }
    hr.open("GET", "product.json", true);
    hr.send();
}

function fish(){
    document.body.style.backgroundImage ="url('https://cdn.miscellaneoushi.com/1920x1080/20121028/fruits%20food%20meat%20fish%20chinese%20sushi%20seafood%20cuisine%201920x1080%20wallpaper_www.miscellaneoushi.com_48.jpg')";
    document.getElementById('heading').innerHTML = "Fish & Meat List";
    var hr = new XMLHttpRequest();
    hr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var meat1 = response.meat;
            var output = "";
            for(var i=0;i<meat1.length;i++){
                output += "<tr>";
                output += "<td>"+meat1[i].SNo+"</td>";
                output += "<td>"+meat1[i].Name+"</td>";
                output += "<td>"+meat1[i].Quantity+"</td>";
                output += "<td>"+meat1[i].Unit+"</td>";
                output += "<td>"+meat1[i].Department+"</td>";
                output += "<td>"+meat1[i].Notes+"</td>";
                output += "</tr>";
            }
        }
        document.getElementById("items").innerHTML = output;

    }
    hr.open("GET", "product.json", true);
    hr.send();
}

function snks(){
    document.body.style.backgroundImage ="url('https://res.klook.com/image/upload/fl_lossy.progressive,q_65,f_auto/c_fill,w_1920,h_1080/v1507882862/activities/nj0tyiwetqwchujoueui.webp')";
    document.getElementById('heading').innerHTML = "Snacks list";
    var hr = new XMLHttpRequest();
    hr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var snacks1 = response.snacks;
            var output = "";
            for(var i=0;i<snacks1.length;i++){
                output += "<tr>";
                output += "<td>"+snacks1[i].SNo+"</td>";
                output += "<td>"+snacks1[i].Name+"</td>";
                output += "<td>"+snacks1[i].Quantity+"</td>";
                output += "<td>"+snacks1[i].Unit+"</td>";
                output += "<td>"+snacks1[i].Department+"</td>";
                output += "<td>"+snacks1[i].Notes+"</td>";
                output += "</tr>";
            }
        }
        document.getElementById("items").innerHTML = output;

    }
    hr.open("GET", "product.json", true);
    hr.send();
}

function spi(){
    document.body.style.backgroundImage = "url('https://wallpapermemory.com/uploads/340/herbs-and-spices-background-hd-1152x768-410399.jpg')";
    document.getElementById('heading').innerHTML = "Spices List";
    var hr = new XMLHttpRequest();
    hr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var spices1 = response.spices;
            var output = "";
            for(var i=0;i<spices1.length;i++){
                output += "<tr>";
                output += "<td>"+spices1[i].SNo+"</td>";
                output += "<td>"+spices1[i].Name+"</td>";
                output += "<td>"+spices1[i].Quantity+"</td>";
                output += "<td>"+spices1[i].Unit+"</td>";
                output += "<td>"+spices1[i].Department+"</td>";
                output += "<td>"+spices1[i].Notes+"</td>";
                output += "</tr>";
            }
        }
        document.getElementById("items").innerHTML = output;

    }
    hr.open("GET", "product.json", true);
    hr.send();
}
