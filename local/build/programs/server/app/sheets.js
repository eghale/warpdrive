(function(){

getSheetData = Meteor.wrapAsync(function() {

    // set auth to be able to edit/add/delete
    my_sheet.setAuth('eleanor.g.hale@gmail.com','M@rk&Ell132014', function(err){
        my_sheet.getInfo( function( err, sheet_info ){
          console.log( sheet_info.title + ' is loaded' );
          // use worksheet object if you want to forget about ids
          /*
           sheet_info.worksheets[0].getRows( function( err, rows ){
           rows[0].colname = 'new val';
           rows[0].save();
           rows[0].del();
           }
           */
        });

        my_sheet.getRows( 1, function(err, rows){
            if (err) console.log( err );

            /*
            _.each(rows, function(row) {

                console.log('row', row.first);

            });
            */

            // to edit row data, just edit the data and call save()
            //rows[0].testnum++;
            //rows[0].save();

            // you can also delete rows by calling .del()
            // rows[3].del();
        });
    });
});


})();
