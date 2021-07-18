$("#image").on(change(){
          myimg= document.getElementById("image")
          imgData = getBase64Image(myimg)
          localStorage.setItem("imgData", imgData)

          //getting image from localstorage
          var dataImage = localStorage.getItem('imgData');
          bannerImg = document.getElementById('showImage');
          bannerImg.src = "data:image/png;base64," + dataImage;
          localStorage.clear()
        })

      })

      // Function to create image into Base64
      function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d")
        ctx.drawImage(img,0,0)

        var dataURL = canvas.toDataURL("image/png")

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "")
    }
  })
