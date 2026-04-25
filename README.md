Ebar log in function crete korte hobe, Karon User log in page theke form fillup korle amake oi data gulo recieve korte hobe. 
Form er moddhe on submit ache, tar moddhe amake ekta function call korte hobe, jeta amake form er data gulo receive korte help korbe.


--> Next js e normally ekta component server component hoy ar server component e amra by default kuno interactivity add korte pari na, 
je karone onClick, onSubmit etc use kora jabe na, ar eta korte hole amake component ke client component e convert korte hobe, jeta amra "use client" diye korte pari.
"Use client" use korle amader component client side e render hobe, ar amra onClick, onSubmit etc use korte parbo.

--> Jokhon ami onSubmit er vitor amar function dibo, automatically event object ta function er parameter hisebe pass hoye jabe, ar ami oi event object theke form er data gulo receive korte parbo. Tar jonno amake first e.preventDefault() call korte hobe, jate form submit hole page reload na hoy, tarpor ami event.target theke form er data gulo receive korte parbo. Ekhon target theke data pete hole amake age input er moddhe name attribute dite hobe, jate ami event.target.name er maddhome oi input er value ta pete pari. 

-->
