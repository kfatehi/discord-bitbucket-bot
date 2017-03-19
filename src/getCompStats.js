var axios = require('axios');

module.exports = function(btag) {
  return axios.get(`https://owapi.net/api/v3/u/${btag}/stats`).then((res)=>{
    return res.data.us.stats.competitive.overall_stats;
    /* 	 "comprank": 1867,
					"wins": 6,
					"level": 34,
					"rank_image": "https://blzgdapipro-a.akamaihd.net/game/playerlevelrewards/0x0250000000000937_Border.png",
					"avatar": "https://blzgdapipro-a.akamaihd.net/game/unlocks/0x02500000000008EF.png",
					"losses": 14,
					"games": 21,
					"ties": 1,
					"prestige": 2,
					"tier": "silver",
					"win_rate": 30
    */
  });
};



if (!module.parent) { 
  module.exports('TheAxelrod-1235').then(function(ret) {
    console.log(ret);
  });
}
