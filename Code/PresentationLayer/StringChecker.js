/* StringChecker class file */

function StringChecker() {

}


/* Properties - prototype */


/* Methods - prototype*/
StringChecker.prototype.check = function( x ) {
   return ( x === x.replace(/[^a-zA-Z0-9\s]/gi, ''));
}

/* Getters & setters */