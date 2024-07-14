'use strict';

// Add target="_blank" to all anchor tags, v 2.1
for ( let x of document.links ) x.setAttribute( 'target', '_blank' );

function generateA()
{
	let part = '<a href="';

	if ( document.querySelector( '.a_href' ).value === '' )
	{
		alert( 'href can\'t be empty!' );
		document.querySelector( '.a_href' ).focus();
		return;
	}
	else
	{
		part += document.querySelector( '.a_href' ).value + '"';
	}

	if ( document.querySelector( '.a_target' ).value !== 'None' )
	{
		part += ' target="' + document.querySelector( '.a_target' ).value + '"';
	}

	document.querySelector( '.generatedCode' ).innerHTML = part + '>';
}
