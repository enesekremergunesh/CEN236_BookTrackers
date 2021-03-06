class UI {

  static init_listeners() {
    this.token_check();
    this.screen_size_change_listener();
  }

  static token_check() {    
    var token = localStorage.getItem("token");
    if(token) {
      $('#userCanvasBodyContainer').html(`
      
      <div class="row justify-content-center">
      <div class="col-10 text-center">
        <img class="img-fluid" alt="Profile Photo" style="max-height: 15rem;"
          src="https://htmlstream.com/preview/unify-v2.6.1/assets/img-temp/400x450/img5.jpg">
      </div>
    </div>
    <div class="row justify-content-center my-3">
      <div class="col-10 text-center">
        <h3>Name Surname</h3>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="list-group">
          <a style="border: none;" href="./my shelf/" class="list-group-item list-group-item-action">My Shelf</a>
          <a style="border: none;" href="./account settings/" class="list-group-item list-group-item-action">Account
            Settings</a>
          <a style="border: none; color: red;" href="#"
            class="list-group-item list-group-item-action">Logout</a>
        </div>

      </div>
    </div>

      `);
    }
    else{
      $('#userCanvasBodyContainer').html(`
      
    <form name="Login Form" class="row g-3 needs-validation justify-content-center" novalidate>

    <div name="Email Div" class="col-lg-6">
      <label for="formEmail" class="form-label">Email</label>
      <input name="email" id="formEmail" type="text" class="form-control" required>
    </div>

    <div name="Password Div" class="col-lg-6">
      <label for="formPassword" class="form-label">Password</label>
      <input name="password" id="formPassword" type="password" class="form-control"  required>
    </div>

    <div name="Submit Div" class="col-6">
      <button class="btn btn-primary" type="submit" style="width: 100%;">Save Changes</button>
    </div>
    
    <div name="SignUp Div" class="col-12 text-center" style="--bs-gutter-y: 0.3rem;">
    <p style="font-size: 12px;">Forget your password? <a href="#signup">Sign Up</a></p>
      
    </div>
  </form>

      `);
      
    }
  }

  static navbar_toggle() {
    if ($('#navbarToggler').attr('aria-expanded') == 'true') {
      console.log('collapse: ' + $('#navbarToggler').attr('aria-expanded'));
      $('#collapsableNavbar').attr('class', 'navbar-collapse collapse');
      $('#navbarToggler').attr('aria-expanded', 'false');
    }
    else {
      console.log('expand: ' + $('#navbarToggler').attr('aria-expanded'));
      $('#collapsableNavbar').attr('class', 'navbar-collapse collapse show');
      $('#navbarToggler').attr('aria-expanded', 'true');
    }
  }

  static user_canvas_toggle() {
    if ($('#userCanvasToggler').attr('aria-expanded') == 'true') {
      // console.log('collapse: ' + $('#userCanvasToggler').attr('aria-expanded'));

      $('#userCanvas').attr('class', 'offcanvas-lg offcanvas-end');
      $('#userCanvasBackdrop').attr('class', '');
      $('#userCanvasToggler').attr('aria-expanded', 'false');
    }
    else {
      // console.log('expand: ' + $('#userCanvasToggler').attr('aria-expanded'));

      $('#userCanvas').attr('class', 'offcanvas-lg offcanvas-end show');
      $('#userCanvasBackdrop').attr('class', 'offcanvas-backdrop fade show');
      $('#userCanvasToggler').attr('aria-expanded', 'true');
    }

  }

  static screen_size_change_listener() {

    $(window).resize(function () {
      // show_size();
      remove_user_canvas_backdrop();
    });

    function show_size() {
      // var canvasWidth = $('#userCanvasBodyContainer').width();
      var canvasWidth = $(window).width();
      if (canvasWidth >= 992) {
        console.log("canvas width: " + canvasWidth);
      }
    }

    function remove_user_canvas_backdrop() {      
      var backdropClass = $('#userCanvasBackdrop').attr('class');
      var togglerClass = $('#userCanvasToggler').attr('aria-expanded');
      if(togglerClass == 'true'){
        if(backdropClass == 'offcanvas-backdrop fade show' && $(window).width() >= 992){
          $('#userCanvas').attr('class', 'offcanvas-lg offcanvas-end');
          $('#userCanvasBackdrop').attr('class', '');
        }
        else if(backdropClass == '' && $(window).width() < 992){
          $('#userCanvas').attr('class', 'offcanvas-lg offcanvas-end show');
          $('#userCanvasBackdrop').attr('class', 'offcanvas-backdrop fade show');
        }
      }
    }

  }

}