 function hello() {

    alert("hello")
    var parapgraph = document.getElementById("para")
    parapgraph.style.backgroundColor="red"
    parapgraph.style.color="white"
  }
  
  const nav = document.querySelector("nav");

  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const items = document.querySelector(".nav-items");
  const form = document.querySelector("form");
function menuButton(){
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }
 
    function cancelButton() {  
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
  }
  function search() {  
   
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  
}
function hideNav(){
  nav.classList.add("d-none");
}


//login 
var LoginModalController = {
  tabsElementName: ".logmod__tabs li",
  tabElementName: ".logmod__tab",
  inputElementsName: ".logmod__form .input",
  hidePasswordName: ".hide-password",
  
  inputElements: null,
  tabsElement: null,
  tabElement: null,
  hidePassword: null,
  
  activeTab: null,
  tabSelection: 0, // 0 - first, 1 - second
  
  findElements: function () {
      var base = this;
      
      base.tabsElement = $(base.tabsElementName);
      base.tabElement = $(base.tabElementName);
      base.inputElements = $(base.inputElementsName);
      base.hidePassword = $(base.hidePasswordName);
      
      return base;
  },
  
  setState: function (state) {
    var base = this,
          elem = null;
      
      if (!state) {
          state = 0;
      }
      
      if (base.tabsElement) {
        elem = $(base.tabsElement[state]);
          elem.addClass("current");
          $("." + elem.attr("data-tabtar")).addClass("show");
      }

      return base;
  },
  
  getActiveTab: function () {
      var base = this;
      
      base.tabsElement.each(function (i, el) {
         if ($(el).hasClass("current")) {
             base.activeTab = $(el);
         }
      });
      
      return base;
  },
 
  addClickEvents: function () {
    var base = this;
      
      base.hidePassword.on("click", function (e) {
          var $this = $(this),
              $pwInput = $this.prev("input");
          
          if ($pwInput.attr("type") == "password") {
              $pwInput.attr("type", "text");
              $this.text("Hide");
          } else {
              $pwInput.attr("type", "password");
              $this.text("Show");
          }
      });

      base.tabsElement.on("click", function (e) {
          var targetTab = $(this).attr("data-tabtar");
          
          e.preventDefault();
          base.activeTab.removeClass("current");
          base.activeTab = $(this);
          base.activeTab.addClass("current");
          
          base.tabElement.each(function (i, el) {
              el = $(el);
              el.removeClass("show");
              if (el.hasClass(targetTab)) {
                  el.addClass("show");
              }
          });
      });
      
      base.inputElements.find("label").on("click", function (e) {
         var $this = $(this),
             $input = $this.next("input");
          
          $input.focus();
      });
      
      return base;
  },
  
  initialize: function () {
      var base = this;
      
      base.findElements().setState().getActiveTab().addClickEvents();
  }
};

$(document).ready(function() {
  LoginModalController.initialize();
});


 function select(_i) {
  var imgs =document.querySelector('img')

  console.log("hello")
  console.log("hello")
 }