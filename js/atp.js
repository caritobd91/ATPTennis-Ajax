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
        return `<div class='box'>
        <div><div class="player-number">${ranking.current_rank}</div> <span class="player-name">${ranking.player_name}</span></div>
        </br>
        <div>${ranking.player_country}</div>
        </br>
        <div>${ranking.player_points}</div>
        
        
        
        </div>`;
    }
});