
// async/await
async function getData( ) {
    try {
        const main = await fetch( `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=L3S0SxnWdLS8grVATfxvT2rcN9Ljgbc5mKTpugEa` );
        console.log( main )
        const infoFromServer = await main.json();

        console.log( infoFromServer );
        console.log( infoFromServer.photos.camera);

        const content = document.querySelector( "#nasa-info0" );
        content.innerHTML = `<img src="${infoFromServer.photos[0].img_src}"/> `

        
        const full_name = document.getElementById("text0");
        full_name.innerHTML = `${infoFromServer.photos[0].camera.full_name}`



        const earth_date = document.getElementById("text1");
        earth_date.innerHTML = `${infoFromServer.photos[0].earth_date}`



        const content2 = document.querySelector( "#nasa-info2" );
        content2.innerHTML= `${infoFromServer.photos[1].rover.status}`

        const earth_date2 = document.getElementById("text2");
        earth_date2.innerHTML = `${infoFromServer.photos[1].earth_date}`

       

    } catch( error ) {
        console.warn( `Nope: ${error}` );
        console.warn( "Nope: " + error );
    }
}          
getData(  );








