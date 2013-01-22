

function menu(){
  menuLayer = new Kinetic.Layer();

  var quadrow = new Kinetic.Text({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2 - 150,
    text: 'Quadrow',
    fontSize: 60,
    fontFamily: 'verdana',
    fill: '#FF4500'
  });
  
  var play = new Kinetic.Text({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2 - 60,
    text: 'Play',
    fontSize: 40,
    fontFamily: 'verdana',
    fill: '#555'
  });
  var login = new Kinetic.Text({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2 + 40,
    text: 'Login',
    fontSize: 40,
    fontFamily: 'verdana',
    fill: '#555'
  });
  var signup = new Kinetic.Text({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2 - 10,
    text: 'Signup',
    fontSize: 40,
    fontFamily: 'verdana',
    fill: '#555'  	
  })
 


  quadrow.setOffset({
    x: quadrow.getWidth() / 2
  });
  play.setOffset({
    x: play.getWidth() / 2
  });
  login.setOffset({
    x: login.getWidth() / 2
  });
  signup.setOffset({
  x: signup.getWidth() / 2
  });
  menuLayer.add(quadrow);
  menuLayer.add(play);
  menuLayer.add(login);
  menuLayer.add(signup);
  menuLayer.add(userLabel);
  stage.add(menuLayer);
  
  play.on('click', function(evt){
    menuLayer.hide()
    match.game()
  });
  login.on('click', function(evt){
    menuLayer.hide()
    user.login()
  });
  signup.on('click', function(evt){
  	menuLayer.hide()
    user.signup()
  });
}



var user = {
  signup : function(){
  	$('#signup').show();
    signupLayer = new Kinetic.Layer();

    var signupTitle = new Kinetic.Text({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2 - 150,
      text: 'Signup',
      fontSize: 60,
      fontFamily: 'verdana',
      fill: '#FF4500'
    });
    var sback = new Kinetic.Text({
	  x: 520,
	  y: 20,
	  text: 'Back',
	  fontSize: 20,
	  fontFamily: 'verdana',
	  fill: '#555'
	})
    signupTitle.setOffset({
      x: signupTitle.getWidth() / 2
    });
 
    signupLayer.add(sback);
    signupLayer.add(signupTitle);
    signupLayer.add(userLabel);
    stage.add(signupLayer);

    sback.on('click', function(evt){
      signupLayer.hide()
      $('#signup').hide();
      menu();
    }); 
  },
  login : function(){
  	$('#login').show();
    loginLayer = new Kinetic.Layer();

    var loginTitle = new Kinetic.Text({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2 - 150,
      text: 'Login',
      fontSize: 60,
      fontFamily: 'verdana',
      fill: '#FF4500'
    });
    var lback = new Kinetic.Text({
	  x: 520,
	  y: 20,
	  text: 'Back',
	  fontSize: 20,
	  fontFamily: 'verdana',
	  fill: '#555'
	})
    loginTitle.setOffset({
      x: loginTitle.getWidth() / 2
    });
    loginLayer.add(lback);
    loginLayer.add(loginTitle);
    loginLayer.add(userLabel);
    stage.add(loginLayer);
    lback.on('click', function(evt){
      loginLayer.hide()
      $('#login').hide();
      menu();
    }); 
  },
  update : function(){

  }
}

var match = {
	game : function(){ 
	  var gameLayer = new Kinetic.Layer();
	  var layer = new Kinetic.Layer();

      var slot1 = new Kinetic.Rect({
        x: 142,
        y: 20,
        width: 47,
        height: 310
      });
      var slot2 = new Kinetic.Rect({
        x: 188,
        y: 20,
        width: 47,
        height: 310
      });
      var slot3 = new Kinetic.Rect({
        x: 233,
        y: 20,
        width: 47,
        height: 310
      });
      var slot4 = new Kinetic.Rect({
        x: 278,
        y: 20,
        width: 47,
        height: 310
      });
      var slot5 = new Kinetic.Rect({
        x: 323,
        y: 20,
        width: 47,
        height: 310
      });
      var slot6 = new Kinetic.Rect({
        x: 368,
        y: 20,
        width: 47,
        height: 310
      });
      var slot7 = new Kinetic.Rect({
        x: 413,
        y: 20,
        width: 47,
        height: 310
      });
      
	  var gback = new Kinetic.Text({
	    x: 520,
		y: 20,
		text: 'Back',
		fontSize: 20,
		fontFamily: 'verdana',
		fill: '#555'
	  });
	  var chipImg = new Image();
	  var boardImg = new Image();
      
      chipImg.onload = function(){

	    var chip = new Kinetic.Image({
          x: stage.getWidth() / 2,
          y: 20,
          image: chipImg,
          height: 43,
          width: 43
        });
		chip.setOffset({
	      x: chip.getWidth() / 2
	    });

        slot1.on('click', function(evt){
      	  chip.transitionTo({
		    x: 163,
		    duration: 1,
		    easing: 'ease-in-out'
		  });
        })
        slot2.on('click', function(evt){
          chip.transitionTo({
		    x: 209.5,
		    duration: 1,
		    easing: 'ease-in-out'
		  });
        })
        slot3.on('click', function(evt){
          chip.transitionTo({
		    x: 255,
		    duration: 1,
		    easing: 'ease-in-out'
		  });
        })
        slot4.on('click', function(evt){
          chip.transitionTo({
		    x: stage.getWidth() / 2 + .5,
		    duration: 1,
		    easing: 'ease-in-out'
		  });
        })
        slot5.on('click', function(evt){
          chip.transitionTo({
		    x: 346,
		    duration: 1,
		    easing: 'ease-in-out'
		  });
        })
        slot6.on('click', function(evt){
          chip.transitionTo({
		    x: 391.5,
		    duration: 1,
		    easing: 'ease-in-out'
		  });
        })
        slot7.on('click', function(evt){
          chip.transitionTo({
		    x: 437,
		    duration: 1,
		    easing: 'ease-in-out'
		  });
        })
	    gameLayer.add(chip);

      }
	  boardImg.onload = function(){
	    var board = new Kinetic.Image({
          x: stage.getWidth() / 2,
          y: stage.getHeight() / 2,
          image: boardImg,
          height: 260,
          width: 320
        });
        board.setOffset({
          x: board.getWidth() / 2,
          y: board.getHeight() /2
        });


	    gameLayer.add(board);
	    gameLayer.add(slot1);
        gameLayer.add(slot2);
        gameLayer.add(slot3);
        gameLayer.add(slot4);
        gameLayer.add(slot5);
        gameLayer.add(slot6);
        gameLayer.add(slot7);
		gameLayer.add(gback);
		gameLayer.add(userLabel);
  	    stage.add(gameLayer);
	  }
      
	  gback.on('click', function(evt){
        gameLayer.hide()
        menu();
      }); 

  	  chipImg.src = 'images/quadrow_chip1.png';
      boardImg.src = 'images/quadrow_board.png';
      
	}
}




var stage = new Kinetic.Stage({
  container: 'canvas',
  width: 600,
  height: 400,
});
var userLabel = new Kinetic.Text({
  x: 20,
  y: 370,
  text: 'User: Guest',
  fontSize: 15,
  fontFamily: 'verdana',
  fill: '#888' 
});
window.onload = function() {
  $('#signup').hide();
  $('#login').hide();

  var layer1 = new Kinetic.Layer();

  var title = new Kinetic.Text({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    text: 'Aerodeck',
    fontSize: 20,
    fontFamily: 'verdana',
    fill: '#555',
    opacity: 0
  });
  title.setOffset({
    x: title.getWidth() / 2
  });
  
  var quote = new Kinetic.Text({
  	x: stage.getWidth() / 2,
    y: stage.getHeight() / 2 + 20,
    text: '"Insert awesome quote here..."',
    fontSize: 20,
    fontFamily: 'courier',
    fill: '#888',
    opacity: 0
  })
  quote.setOffset({
    x: quote.getWidth() / 2
  });
  layer1.add(title);
  layer1.add(quote);
  stage.add(layer1);
  var tduration = 1000;
  var qduration = 3000;

  var quoteAnim = new Kinetic.Animation(function(frame) {
  	if (frame.time >= qduration) {
      quoteAnim.stop();
      layer1.remove();
      menu();
    } else {
      quote.setOpacity(frame.time / qduration);
    }
  }, layer1);

  var titleAnim = new Kinetic.Animation(function(frame) {

    if (frame.time >= tduration) {
      titleAnim.stop();
      title.setFontSize(title.getFontSize() - 0.5)
      quoteAnim.start();

    } else {
      title.setOpacity(frame.time / tduration);
      title.setFontSize(title.getFontSize() + 0.5)
      title.setX(title.getX() - 1.1)
      title.setY(title.getY() - 1)
    }

  },layer1);
  
  titleAnim.start();

}