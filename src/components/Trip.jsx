import React from 'react';
import "./TripStyle.css";
import TripData from './TripData';
import Trip1 from "../components/assets/3.png";
import Trip2 from "../components/assets/12.png.jpeg";
import Trip3 from "../components/assets/11.png.jpeg";

const Trip = () => {
    return (
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
  
        <div className="tripcard">
          <TripData 
          image={Trip1}
          heading="Trip in Kedarnath"
          text="Kedarnath is located at a distance of 223 km from Rishikesh in Uttarakhand and close to the source of the Mandakini River at the height of 3,583 m (11,755 ft) above sea level.[11] The township is built on a barren stretch of land on the shores of Mandakini river. The surrounding scenery of the Himalayas and green pastures makes it a very attractive place for pilgrimage and trekking. Behind the town and the Kedarnath Temple, stands the majestic Kedarnath peak at 6,940 m (22,769 ft), the Kedar Dome at 6,831 m (22,411 ft) and other peaks of the range."
          />
          <TripData 
          image={Trip2}
          heading="Trip in Jaipur"
          text="the capital city of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis. The bustling modern city is one of the three corners of the golden triangle that includes Delhi, Agra and Jaipur.

          The story goes that in 1876, the Prince of Wales visited India on a tour. Since the colour pink was symbolic of hospitality, Maharaja Ram Singh of Jaipur painted the entire city pink. The pink that colours the city makes for a marvellous spectacle to behold. Jaipur rises up majestically against the backdrop of the forts Nahargarh, Jaigarh and Garh Ganesh Temple.
          
          Jaipur traces back its origins to 1727 when it was established by Jai Singh II, the Raja of Amber. He shifted his capital from Amber to the new city because of the rapidly-growing population and an increasing water scarcity. Noted architect Vidyadhar Bhattacharya used the established principles of Vastu Shastra to build the city"
          />
          <TripData 
          image={Trip3}
          heading="Trip in Mumbai"
          text="Mumbai, formerly Bombay, city, capital of Maharashtra state, southwestern India. It is the country’s financial and commercial centre and its principal port on the Arabian Sea.

          Explore Mumbai, the most populous city and the country's financial and commercial center
          Explore Mumbai, the most populous city and the country's financial and commercial centerSee all videos for this article
          Located on Maharashtra’s coast, Mumbai is India’s most-populous city, and it is one of the largest and most densely populated urban areas in the world. It was built on a site of ancient settlement, and it took its name from the local goddess Mumba—a form of Parvati, the consort of Shiva, one of the principal deities of Hinduism—whose temple once stood in what is now the southeastern section of the city. It became known as Bombay during the British colonial period, the name possibly an Anglicized corruption of Mumbai or perhaps of Bom Baim (“Good Harbour”), supposedly a Portuguese name for the locale. The name Mumbai was restored officially in 1995, although Bombay remained in common usage."
          />
        </div>
      </div>
    );
  }
  
  export default Trip;