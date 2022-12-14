export function useRateStars(rate) {
   const stars = [];

   for (let index = 1; index <= 5; index++) {
      if (index < Math.round(rate)) {
         stars.push(
            <img key={index} src="/assets/images/icon-star.svg" alt="" />
         );
      } else {
         stars.push(
            <img key={index} src="/assets/images/icon-unstar.svg" alt="" />
         );
      }
   }

   return stars;
}
