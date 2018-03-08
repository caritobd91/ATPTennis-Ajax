$(document).ready(function(){
    var apiUrl = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=atp-rankings%40vbarbaresi&sort=-current_rank&facet=player_country&facet=current_rank';
    $.getJSON(
        apiUrl,
        function(data){
            var rankings = data.records;
            //Loops through the top 10 rankings
            rankings.forEach(function(element){
                var fields = element.fields;
                var html = buildHtml(fields);
                $(".container").append(html);    
            });
        }
    );

    function buildHtml(ranking){
        console.log(ranking);
        return `<div class='box box1'>
        <div class="player-number">${ranking.current_rank}</div> - <div>${ranking.player_name}</div>
        </br>
        <div>${ranking.player_country}</div>
        
        
        
        </div>`;
    }
});