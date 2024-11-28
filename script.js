var id_index = -1;

var current_step = 0;

var steps_on_password = [1]; // contains indexes of every step that you type password into

var passwords = ["ABC"];

function next_step() {
  if (steps_on_password.includes(current_step)) {
    check_password(current_step);
  } else {
    load_step(current_step + 1);
  }
}

function load_step(step_to_load) {
  document.getElementById(
    "content" + String(parseInt(step_to_load))
  ).style.transition = "0.8s";
  document.getElementById(
    "content" + String(parseInt(step_to_load))
  ).style.opacity = "0";
  document.getElementById(
    "content" + String(parseInt(step_to_load))
  ).style.visibility = "hidden";
  document.getElementById(
    "content" + String(parseInt(step_to_load))
  ).style.opacity = "0";

  document.getElementById(
    "content" + String(parseInt(step_to_load + 1))
  ).style.transition = "0s";
  //document.getElementById("content"+String( parseInt(step_to_load+1))).style.opacity = "0";
  document.getElementById(
    "content" + String(parseInt(step_to_load + 1))
  ).style.visibility = "visible";
  document.getElementById(
    "content" + String(parseInt(step_to_load + 1))
  ).style.transition = "1.6s";
  document.getElementById(
    "content" + String(parseInt(step_to_load + 1))
  ).style.opacity = "1";

  current_step = step_to_load;
}

function check_password(step_to_check) {
  if (
    document.getElementById(
      "input" + String(parseInt(steps_on_password.indexOf(step_to_check) + 1))
    ).value == passwords[steps_on_password.indexOf(step_to_check)]
  ) {
    load_step(step_to_check + 1);
  } else {
    document.getElementById(
      "input" + String(parseInt(steps_on_password.indexOf(step_to_check) + 1))
    ).style.background = "#1F141469";

    document.getElementById(
      "input" + String(parseInt(steps_on_password.indexOf(step_to_check) + 1))
    ).style.boxShadow = "0px 0px 4px 3px #7C000029";
  }
}

var remove_base_input_v = 0;

function remove_base_input() {
  if (remove_base_input_v == 0) {
    remove_base_input_v = 1;

    document.getElementById("input1").value = "";

    document.getElementById("input1").style.color = "#E8E8E8";
  }
}

function background_generate() {
  var background_div = "";

  id_index = -1;

  for (var i = 0; i < document.body.clientWidth / 50; i++) {
    for (var j = 0; j < document.body.clientHeight / 65; j++) {
      id_index++;

      background_div =
        background_div +
        '<svg class="leaves" id="l_' +
        id_index +
        '"  style="z-index:-1;position:absolute;left:' +
        String(
          parseInt(i * 50 + Math.floor(Math.random() * (15 - -15 + 1)) + -15)
        ) +
        "px;top:" +
        String(
          parseInt(j * 65 + Math.floor(Math.random() * (15 - -15 + 1)) + -15)
        ) +
        "px;//transform: rotate(" +
        String(parseInt(Math.floor(Math.random() * (15 - -15 + 1)) + -15)) +
        'deg) ;" width="23" height="53" viewBox="0 0 23 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="leaf_outline" d="M10.7263 52.1839C8.93882 47.6444 9.29075 45.3951 10.7263 40.8556M10.7263 40.8556C4.62545 37.4304 2.84021 33.2228 0.628878 25.0609C3.10505 11.1279 5.55691 6.68871 10.7263 1.29597C16.3049 6.23886 18.8701 11.1462 22.086 25.0609C18.8858 33.7267 16.8478 38.3657 10.7263 40.8556Z" stroke="#515151" stroke-width="0.6"/><path d="M11.3184 9.7788C11.277 9.61833 11.1134 9.5217 10.953 9.56296C10.7926 9.60422 10.6961 9.76776 10.7375 9.92822L11.3184 9.7788ZM10.8134 40.9271C12.4997 34.4531 13.3608 29.5024 13.4309 24.7472C13.5011 19.99 12.7795 15.4438 11.3184 9.7788L10.7375 9.92822C12.1907 15.5632 12.9001 20.0527 12.831 24.7379C12.7619 29.4249 11.9134 34.3232 10.2328 40.7754L10.8134 40.9271Z" fill="#515151"/><path d="M6.75059 12.9178C6.5953 12.86 6.42445 12.9397 6.36897 13.0958C6.31349 13.2519 6.39439 13.4254 6.54968 13.4831L6.75059 12.9178ZM12.3042 14.9843L6.75059 12.9178L6.54968 13.4831L12.1033 15.5496L12.3042 14.9843Z" fill="#515151"/><path d="M6.75143 19.6341C6.59725 19.5735 6.42501 19.65 6.36672 19.8051C6.30843 19.9602 6.38615 20.1351 6.54033 20.1958L6.75143 19.6341ZM13.3148 22.2173L6.75143 19.6341L6.54033 20.1958L13.1037 22.7789L13.3148 22.2173Z" fill="#515151"/><path d="M5.7431 26.3507C5.59137 26.2842 5.41647 26.3541 5.35247 26.507C5.28846 26.6598 5.35958 26.8376 5.51132 26.9042L5.7431 26.3507ZM12.8113 29.4505L5.7431 26.3507L5.51132 26.9042L12.5795 30.0039L12.8113 29.4505Z" fill="#515151"/><path d="M18.3621 27.98C18.5183 27.9246 18.6018 27.7525 18.5486 27.5956C18.4955 27.4386 18.3258 27.3563 18.1696 27.4117L18.3621 27.98ZM12.8085 29.9502L18.3621 27.98L18.1696 27.4117L12.616 29.3819L12.8085 29.9502Z" fill="#515151"/><path d="M18.3621 20.7471C18.5183 20.6918 18.6018 20.5196 18.5486 20.3627C18.4955 20.2058 18.3258 20.1235 18.1696 20.1789L18.3621 20.7471ZM12.8085 22.7173L18.3621 20.7471L18.1696 20.1789L12.616 22.149L12.8085 22.7173Z" fill="#515151"/><path d="M16.3471 13.513C16.496 13.4404 16.56 13.2598 16.49 13.1096C16.4201 12.9594 16.2426 12.8965 16.0937 12.9691L16.3471 13.513ZM12.3081 15.4832L16.3471 13.513L16.0937 12.9691L12.0547 14.9393L12.3081 15.4832Z" fill="#515151"/></svg>';
    }
  }

  document.getElementById("background").innerHTML = background_div;

  window.addEventListener("resize", function (e) {
    background_generate();
  });
}

function background_animation() {
  //document.getElementById("l_"+index).querySelector('path').style.fill = "green";
  //document.getElementById("l_"+index).querySelector('.leaf_outline').style.fill = "none";
  //document.getElementById("l_"+index).querySelector('path').style.stroke = "green";

  window.addEventListener("mousemove", function (e) {
    for (var i = 0; i < id_index + 1; i++) {
      //console.log("mouse location:", e.clientX, e.clientY);

      var element_x = parseInt(document.getElementById("l_" + i).style.left);

      var element_y = parseInt(document.getElementById("l_" + i).style.top);

      //console.log(element_x, element_y);

      //console.log(element_x > e.clientX - 200);

      //console.log(parseInt(element_x));

      //console.log(e.clientX - 200);

      //console.log(element_x >! e.clientX);

      //console.log(e.clientY);

      //if(element_x > e.clientX - 100 && element_x < e.clientX  &&  element_y > (e.clientY - 100)  &&  element_y < (e.clientY + 100)){

      if (
        element_x > e.clientX - 100 &&
        element_x < e.clientX &&
        element_y > e.clientY - 100 &&
        element_y < e.clientY + 100
      ) {
        //console.log("a");

        document.getElementById("l_" + i).querySelector("path").style.fill =
          "#1e361e";

        //document.getElementById("l_"+i).style.transform = "translateX(50px)";

        //document.getElementById("l_"+i).style.transform = "translateX( -" + String( parseInt( element_x - (e.clientX - 100) )) + "px )";

        //document.getElementById("l_"+i).style.transform = "translateX( " + String( parseInt( -100 + (e.clientX - element_x) )) + "px )";

        document.getElementById("l_" + i).style.transform =
          "translateX( " +
          String(
            parseInt(
              -100 + (e.clientX - element_x) + Math.abs(element_y - e.clientY)
            )
          ) +
          "px )    rotate( " +
          String(parseInt(Math.floor(Math.random() * (15 - -15 + 1)) + -15)) +
          "deg )";

        //document.getElementById("l_"+i).style.transform = "rotate( " + String( parseInt( Math.floor(Math.random() * (15 - (-15) + 1)) + (-15)  )) + "deg )";
      } else if (
        element_x < e.clientX + 100 &&
        element_x > e.clientX &&
        element_y > e.clientY - 100 &&
        element_y < e.clientY + 100
      ) {
        //console.log("a");

        document.getElementById("l_" + i).querySelector("path").style.fill =
          "#1e361e";

        //document.getElementById("l_"+i).style.transform = "translateX(50px)";

        //document.getElementById("l_"+i).style.transform = "translateX( " + String( parseInt( 100 - (element_x - e.clientX) )) + "px )";

        document.getElementById("l_" + i).style.transform =
          "translateX( " +
          String(
            parseInt(
              100 - (element_x - e.clientX) - Math.abs(element_y - e.clientY)
            )
          ) +
          "px )   rotate( " +
          String(parseInt(Math.floor(Math.random() * (15 - -15 + 1)) + -15)) +
          "deg ) ";

        //document.getElementById("l_"+i).style.transform = "rotate( " + String( parseInt( Math.floor(Math.random() * (15 - (-15) + 1)) + (-15)  )) + "deg )";
      } else {
        document.getElementById("l_" + i).querySelector("path").style.fill =
          "none";

        document.getElementById("l_" + i).style.transform = "translateX(0px)";
      }
    }
  });
}
