import pick from 'lodash/pick';
import { ParsedCat, Cat } from '../../types';

exports.formatForSelect = (data: Cat[], visits: number): ParsedCat => {
  const breedInfo = data[0].breeds[0];

  // isolate images
  const images = data.map((img: any) => img.url);
  images.shift();

  // Isolate relevant data
  const overview = pick(
    breedInfo,
    'name',
    'id',
    'description',
    'temperament',
    'origin',
    'life_span'
  );
  const img = data[0].url;
  const attributesRaw: any = pick(
    breedInfo,
    'adaptability',
    'affection_level',
    'child_friendly',
    'grooming',
    'intelligence',
    'health_issues',
    'social_needs',
    'stranger_friendly'
  );

  // make attributes iterable for front-end
  const attributes = Object.keys(attributesRaw).map(key => {
    const formattedKey = key.replace('_', ' ');
    return { [formattedKey]: attributesRaw[key] };
  });

  const dataOfInterest = { ...overview, attributes, img, images, visits: visits && visits };

  console.log(dataOfInterest);

  return dataOfInterest;
};

/*









*/

// V2
// export const formatForSelect = (data: Cat[], visits: number): ParsedCat => {
//   const breedInfo = data[0].breeds[0];

//   // isolate images
//   const images = data.map((img: any) => img.url).shift();

//   // Isolate relevant data
//   const overview = pick(
//     breedInfo,
//     "name",
//     "id",
//     "description",
//     "temperament",
//     "origin",
//     "life_span"
//   );
//   const img = data[0].url;
//   const attributesRaw = pick(
//     breedInfo,
//     "adaptability",
//     "affection_level",
//     "child_friendly",
//     "grooming",
//     "intelligence",
//     "health_issues",
//     "social_needs",
//     "stranger_friendly"
//   );

//   // make attributes iterable for front-end
//   const attributes = Object.keys(attributesRaw).map((key) => {
//     // @ts-ignore
//     return { [key]: attributesRaw[key] };
//   });

//   // console.log("RAW", attributesRaw);

//   const dataOfInterest = {
//     ...overview,
//     attributes: [attributesRaw],
//     img,
//     images,
//     visits: visits && visits,
//   };
//   // console.log(dataOfInterest);

//   return dataOfInterest;
// };
