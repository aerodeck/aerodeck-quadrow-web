$(function() {
   $(window).keypress(function(e) {
       var key = e.which;
   });
});

function main(){
  mainLayer = new Kinetic.Layer();
  optionsLayer = new Kinetic.Layer();

  var current_user;
  if(localStorage.getItem('logged_in') == 'true'){
    current_user = localStorage.username;
  }else{
    current_user = 'Guest';
  }

  userLabel = new Kinetic.Text({
    x: 20,
    y: 370,
    text: 'User: ' + current_user,
    fontSize: 15,
    fontFamily: 'verdana',
    fill: '#888' 
  });
  var quadrow = new Kinetic.Text({
    x: 40,
    y: 40,
    text: 'Quadrow',
    fontSize: 40,
    fontFamily: 'verdana',
    fill: '#FF4500'
  });
  
  var play = new Kinetic.Text({
    x: 40,
    y: 100,
    text: 'Play',
    fontSize: 40,
    fontFamily: 'verdana',
    fill: '#555'
  });
  var settings = new Kinetic.Text({
    x: 490,
    y: 40,
    text: 'Settings',
    fontSize: 20,
    fontFamily: 'verdana',
    fill: '#444'
  });
  var logout = new Kinetic.Text({
    x: 510,
    y: 80,
    text: 'Logout',
    fontSize: 16,
    fontFamily: 'verdana',
    fill: '#666'
  });
  var profile = new Kinetic.Text({
    x: 510,
    y: 120,
    text: 'Profile',
    fontSize: 16,
    fontFamily: 'verdana',
    fill: '#666'
  });
  var help = new Kinetic.Text({
    x: 510,
    y: 160,
    text: 'Help',
    fontSize: 16,
    fontFamily: 'verdana',
    fill: '#666'
  });
  mainLayer.add(quadrow);
  mainLayer.add(play);
  mainLayer.add(settings);
  mainLayer.add(userLabel);
  optionsLayer.add(logout);
  optionsLayer.add(profile);
  optionsLayer.add(help);
  stage.add(mainLayer);
  stage.add(optionsLayer);
  optionsLayer.hide();
  play.on('click', function(evt){
    mainLayer.hide();
    optionsLayer.hide();
    match.game()
  });
  logout.on('click', function(evt){
    localStorage.setItem('logged_in', 'false');
    mainLayer.hide();
    optionsLayer.hide();
    user.login();
  });
  var open = false;
  settings.on('click', function(evt){
    if(open == false){
      optionsLayer.show();
      open = true;
    }else{
      optionsLayer.hide();
      open = false
    }
  })
  
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
    stage.add(signupLayer);

    sback.on('click', function(evt){
      signupLayer.hide()
      $('#signup').hide();
      user.login();
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
      var signupTitle = new Kinetic.Text({
        x: 510,
        y: 20,
        text: 'Signup',
        fontSize: 20,
        fontFamily: 'verdana',
        fill: '#555'
      });    
      loginTitle.setOffset({
        x: loginTitle.getWidth() / 2
      });
      loginLayer.add(loginTitle);
      loginLayer.add(signupTitle);
      stage.add(loginLayer);
      signupTitle.on('click', function(evt){
        loginLayer.hide()
        $('#login').hide();
        user.signup();
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
	  var chipCopyImg = new Image();
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
        var chip = new Kinetic.Image({
          x: stage.getWidth() / 2 + .5,
          y: 20,
          image: chipImg,
          height: 43,
          width: 43
        });
        chip.setOffset({
	      x: chip.getWidth() / 2
	    });
        chip.on('click', function(evt){

          var chipCopy = new Kinetic.Image({
            x: chip.getX(),
            y: chip.getY(),
            image: chipCopyImg,
            height: chip.getHeight(),
            width: chip.getWidth()
          });
          chipCopy.setOffset({
	        x: chipCopy.getWidth() / 2
	      });

          if (chip.getX() == 163 || chip.getX() == 209.5 || chip.getX() == 255 || 
          	  chip.getX() == stage.getWidth() / 2 + .5 || chip.getX() == 346 || chip.getX() == 391.5 || 
          	  chip.getX() == 437){
            var chipAnim = new Kinetic.Animation(function(frame) {
              chipCopy.setY(chipCopy.getY() + 9.55);
              if (chipCopy.getY() > 280){
                chipAnim.stop();
              }
            }, gameLayer);
            gameLayer.add(chipCopy);
            gameLayer.draw();
          	chipAnim.start();
          }else{
            null
          }
          
          
        });
	    gameLayer.add(board);
	    gameLayer.add(gback);
	    gameLayer.add(userLabel);
		  gameLayer.add(slot1);
      gameLayer.add(slot2);
      gameLayer.add(slot3);
      gameLayer.add(slot4);
      gameLayer.add(slot5);
      gameLayer.add(slot6);
      gameLayer.add(slot7);
      gameLayer.add(chip);
		  gameLayer.draw();
        stage.add(gameLayer);
        
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
         
	  }      
	  gback.on('click', function(evt){
        gameLayer.hide()
        main();
      }); 

  	  chipImg.src = 'images/quadrow_chip1.png';
      boardImg.src = 'images/quadrow_board.png';
      chipCopyImg.src = 'images/quadrow_chip1.png';
	}
}




var stage = new Kinetic.Stage({
  container: 'canvas',
  width: 600,
  height: 400,
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
      user.login();
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