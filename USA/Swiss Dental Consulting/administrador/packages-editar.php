<?php include_once("includes/session.php");?>
<?php include_once("includes/notifications.php");?>
<?php include_once("../includes/globalVars.php");?>
<?php $_SESSION['mainPage'] = "packages.php";?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title> GLL | Edit packages</title>
    <?php include_once("includes/head.php");?>
  </head>
  <body class="hold-transition skin-blue sidebar-mini">
    <?php include_once("includes/header.php");?>
    <?php include_once("includes/menubar.php");?>
    <!-- =============================================== -->

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          Edit packages
          
        </h1>
        <ol class="breadcrumb">
          <li><a href="index.php"><i class="fa fa-dashboard"></i> Home</a></li>
          <li><a href="packages.php">packages</a></li>
          <li class="active"><a href="#">Edit</a></li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">

        <!-- Default box -->
        <div class="box">
          <div class="box-body">
            <form id="frmFaq" enctype="multipart/form-data" style="margin-bottom:20px;">
              <div class="col-xs-12">
                <div class="form-group col-sm-3">
                  <label>Country:</label>
                  <select class="form-control color-black bo-disabled" id="countryBanner" name="countryBanner">
                  </select>
                </div>
                <div class="form-group col-sm-3" style="white-space: nowrap; margin-top: 30px;">
                      <input type="checkbox" class="form-check-input" id="vcRecomended" name="vcRecomended" value="1" checked><label style="padding-left: 0.4em;">Make it recomended</label>
                </div>
              </div>
              <div class="col-xs-12">
                <div class="form-group col-sm-3">
                  <label>Tag:</label>
                  <select class="form-control" id="tagType" name="tagType">
                  </select>
                </div>
                <div class="form-group col-sm-3">
                  <label>Position:</label>
                  <select class="form-control" id="position" name="position">
                  </select>
                </div>
                <div class="form-group col-sm-6">
                  <div class="col-sm-4">
                   <label>Choose Image:</label>
                   <span onclick="funOpenGallery(false,og_img,<?=GALLERY_IMAGE?>)" class="form-control btn btn-success">Gallery</span>
                   <input type="hidden" id="og_img" name="og_image" class="form-control">
                  </div>
                  <div class="col-sm-8">
                    <img id="bg_og_img" name="bg_og_image" src=""  class="img-responsive">
                  </div>
                </div>

              </div>
              <ul id="navBar" class="nav nav-tabs"></ul>
              <div id="tabContent" class="tab-content"></div>
              <button id="btnSave" class="btn btn-right btn-primary">Guardar</button>
              <input type="hidden" name="cmdEval" value="editPackage">
              <input type="hidden" name="idPackages" value="<?=$_REQUEST['id']?>">
              <input type="hidden" name="bot" value="">
            </form>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->

      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <?php include_once("includes/footer.php");?>
    <?php include_once("gallery.php");?>
  </div>
  <!-- ./wrapper -->
    <?php include_once("includes/mainjs.php");?>
    <script>
      $(document).ready(function() {
          funCreateItems();
      });

      function funCreateItems(){
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  var response = this.responseText;
                  // "true|#|$optionsCountry|#|$listNavBar|#|$listFormBar|#|$optionRank|#|$path|#|$galleryId|#|$optionsTag|#|$recomended"
                  var viArrayValues = response.split("|#|");
                  if(viArrayValues[0] == "true"){
                    document.getElementById("countryBanner").innerHTML = viArrayValues[1];
                    document.getElementById("navBar").innerHTML = viArrayValues[2];
                    document.getElementById("tabContent").innerHTML = viArrayValues[3];
                    document.getElementById("position").innerHTML = viArrayValues[4];
                    $("#bg_og_img").attr("src","../"+viArrayValues[5]);
                    document.getElementById("og_img").value = viArrayValues[6];
                    document.getElementById("tagType").innerHTML = viArrayValues[7];
                    if(Number(viArrayValues[8])==0)
                    {document.querySelector("#vcRecomended").removeAttribute("checked");}
                    else{document.querySelector("#vcRecomended").setAttribute("checked","checked");}
                    funStartEditor();
                  }else{
                      $.notify("Oppsss... Aconteceu um erro ao tentar ir buscar informação advantage!","error");
                  }
              }
          };
          var query = window.location.search.substring(1);
          xmlhttp.open("GET", "includes/packages.php?cmdEval=getPackageEdit&" + query, true);
          xmlhttp.send();
      }

      $(document).on("submit", "form", function(event) {
            event.preventDefault();
            var str = $( "form" ).serialize();
            var url = "includes/packages.php";
            var formData = new FormData($(this)[0]);
            $.ajax({
                url: url,
                type: 'POST',
                data: formData,
                async: false,
                success: function (data) {
                    var response = data.split("||");
                    if(response[0] == "true"){
                        $.notify(response[1],"success");
                        document.getElementById("frmFaq").reset();
                    }else{
                        $.notify(response[1],"error");
                    }
                },
                error: function(chr, desc, err){
                  $.notify("Oppsss... Aconteceu um problema!","error");
                },
                cache: false,
                contentType: false,
                processData: false
            });

            return false;
        });

    </script>
  </body>
</html>
