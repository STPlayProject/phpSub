// Generated by CoffeeScript 1.8.0
(function() {
  var $captureInfo, $charDisplay, $createArea, $fileCapture, $fileSelect, $fileSelectBtn, $imgPreview, $resualtArea, eventHandle, fileDrag, imageCut, imgToCharacter, resultDisplay;
  $createArea = $('#create-area');
  $resualtArea = $('#resualt-area');
  $fileCapture = $('#file-capture');
  $fileSelect = $('#file-select');
  $fileSelectBtn = $('#file-select-btn');
  $captureInfo = $fileCapture.find('.info');
  imgToCharacter = null;
  imageCut = null;
  $imgPreview = $('#img-preview');
  $charDisplay = $('#char-display');
  $fileSelectBtn.on('click', function() {
    return $fileSelect.click();
  });
  fileDrag = new FileDrag({
    'dragDrop': $fileCapture[0],
    'fileInput': $fileSelect[0]
  });
  fileDrag.filter = function(files) {
    var file, fileslist, _i, _len;
    fileslist = [];
    for (_i = 0, _len = files.length; _i < _len; _i++) {
      file = files[_i];
      fileslist.push(file);
    }
    return fileslist;
  };
  fileDrag.onDragOver = function(e) {
    $captureInfo.html('可以放手了，大侠！');
    return $fileCapture.addClass('hover');
  };
  fileDrag.onDragLeave = function(e) {
    $captureInfo.html('将图片拖进此处或');
    return $fileCapture.removeClass('hover');
  };
  fileDrag.onSelect = function(files) {
    var file, reader;
    if (files.length === 0) {
      return;
    }
    reader = new FileReader();
    file = files.shift();
    reader.readAsBinaryString(file);
    return reader.onload = function(evt) {
      var workbook;
      return workbook = XLSX.read(evt.target.result, {
        type: 'binary'
      });
    };
  };
  resultDisplay = function(imgObj) {
    $createArea.hide();
    $resualtArea.show();
    imageCut = new ImageCut(imgObj);
    imageCut.setCutParams({
      'maxWidth': 500
    });
    return imageCut.create(function(newImgObj) {
      imgToCharacter = new ImgToCharacter(newImgObj);
      return $imgPreview.html(newImgObj);
    });
  };
  eventHandle = function() {
    return $resualtArea.on('click', '.compile', function() {
      var $this, result, type;
      $this = $(this);
      type = $this.data('type');
      result = imgToCharacter.create(type);
      console.log(type);
      if (type === 'char') {
        return $charDisplay.html(result);
      } else {
        return $charDisplay.html('<img src="' + result + '">');
      }
    });
  };
  return eventHandle();
})();
