$(document).ready(function(){
    var apiUrl = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=atp-rankings%40vbarbaresi&sort=-current_rank&facet=player_country&facet=current_rank';
    $.getJSON(
        apiUrl,
        function(data){
            console.log(data);
        }
    );
});