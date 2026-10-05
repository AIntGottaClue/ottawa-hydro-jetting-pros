export type Neighborhood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string;
  sections: { h: string; ps: string[] }[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  related: string[];
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'downtown-ottawa',
    name: 'Downtown Ottawa',
    h1: 'Hydro jetting in Downtown Ottawa, KS',
    title: 'Hydro Jetting in Downtown Ottawa, KS | Ottawa Hydro Jetting Pros',
    description: 'Drain and sewer cleaning questions for older buildings and homes around Main Street in downtown Ottawa, Kansas.',
    intro: 'Downtown Ottawa sits just south of the Marais des Cygnes River and runs along Main Street. The blocks around it are among the older parts of town, so the pipe under a building here may have been repaired or replaced in pieces over the years.',
    sections: [
      { h: 'Where downtown sits', ps: [
        'The Historic Ottawa Central Business District covers about 80.8 acres on both sides of Main Street. It runs from Walnut Street on the west to Hickory Street on the east, with 5th Street on the south and the river levee on the north. The Franklin County Courthouse at 315 South Main Street is part of it.',
        'The National Register nomination describes residential neighborhoods to the east and west of the district. Ottawa Main Street describes a downtown that mixes Gothic, Renaissance, Victorian and Art Deco buildings.'
      ] },
      { h: 'What that can mean for a drain line', ps: [
        'A building\'s age does not tell you what its sewer line is made of. Additions, remodels and past repairs can leave different materials joined in one run. A camera inspection shows what is actually in the ground before anyone chooses a cleaning method.',
        'If the same drain backs up again soon after a cleaning, ask where the blockage sits and whether the pipe is sound enough for hydro jetting. A cracked or offset pipe needs repair, not only cleaning.'
      ] },
    ],
    faqs: [
      { q: 'Who handles a backup in the public sewer near Main Street?', a: 'The public sewer main generally belongs to the city utility, and the line from a building to that main is usually the owner\'s responsibility. The exact boundary can vary, so confirm it with the City of Ottawa or a qualified professional.' },
      { q: 'Does plumbing work in Ottawa need a permit?', a: 'Ottawa has adopted the 2018 International Plumbing Code and posts its permit applications on the Building Codes page. Whether a given job needs a permit depends on the work, so ask the city before starting.' },
      { q: 'Can hydro jetting harm an older line?', a: 'It can if the pipe is cracked or fragile. An inspection first helps decide whether jetting is suitable.' },
    ],
    sources: [
      { label: 'National Register nomination: Historic Ottawa Central Business District (NPS)', url: 'https://npgallery.nps.gov/GetAsset/b02e7efa-08ca-428d-89cc-0c971dc828a9' },
      { label: 'Ottawa Main Street', url: 'https://www.ottawamainstreet.org/' },
      { label: 'City of Ottawa, KS: Building Codes', url: 'https://www.ottawaks.gov/205/Building-Codes' },
      { label: 'Code of the City of Ottawa, KS: International Plumbing Code', url: 'https://ottawaks.citycode.net/artiViIntePlumCode.htm' },
    ],
    related: ['tree-root-intrusions', 'recurring-clogs-and-slow-drains'],
  },
  {
    slug: 'ottawa-university-area',
    name: 'Ottawa University Area',
    h1: 'Hydro jetting near Ottawa University, KS',
    title: 'Hydro Jetting Near Ottawa University, Ottawa KS | Ottawa Hydro Jetting Pros',
    description: 'Drain and sewer cleaning questions for homes and rentals around the Ottawa University campus in Ottawa, Kansas.',
    intro: 'Ottawa University was founded in 1865 on the Marais des Cygnes River. Its first campus building went up in 1869, burned in 1875 and was rebuilt in 1876. That building still stands as Tauy Jones Hall.',
    sections: [
      { h: 'A campus that has been here since the 1860s', ps: [
        'Ottawa University grew out of a partnership between Baptist missionaries and the Ottawa Indian tribe. The university says its first building was raised in spring 1869, lost to fire in 1875 and rebuilt in 1876 as Tauy Jones Hall.',
        'Homes and buildings near a campus this old were built across many decades. The age of the neighborhood alone does not say what any one drain line is made of.'
      ] },
      { h: 'Questions worth asking near campus', ps: [
        'If you rent out a house or live in one with several people, kitchen drains can see steady use through the school year and long gaps over breaks. Grease and wipes can collect along the pipe wall in that pattern. Ask whether the pipe is sound before anyone uses high-pressure water on it.',
        'A drain that slows again soon after it was snaked may still have buildup along the pipe wall. A camera inspection shows what is there and whether roots or a damaged joint are involved.'
      ] },
    ],
    faqs: [
      { q: 'Is hydro jetting different for a rental or shared house?', a: 'The method is the same. What changes is how the line is used. A line that carries heavy kitchen use may collect grease sooner, so ask for a camera check if clogs keep coming back.' },
      { q: 'Who is responsible for the sewer line, the owner or the tenant?', a: 'That depends on the lease and on who owns the property. The line from a building to the public main is usually the property owner\'s responsibility, so check with the owner or manager and the City of Ottawa.' },
      { q: 'How do I tell whether a clog is in a branch drain or the main line?', a: 'If only one fixture is slow, the problem is often in its branch. If several fixtures back up or gurgle, the main line may be involved. A professional can locate it.' },
    ],
    sources: [
      { label: 'Ottawa University: History and Heritage', url: 'https://www.ottawa.edu/ouks/about/history-and-heritage' },
    ],
    related: ['severe-grease-and-sludge', 'recurring-clogs-and-slow-drains'],
  },
  {
    slug: 'forest-park-area',
    name: 'Forest Park Area',
    h1: 'Hydro jetting near Forest Park, Ottawa KS',
    title: 'Hydro Jetting Near Forest Park, Ottawa KS | Ottawa Hydro Jetting Pros',
    description: 'Drain and sewer cleaning questions for homes near Forest Park in the northwest part of Ottawa, Kansas.',
    intro: 'Forest Park is on the northwest corner of Ottawa. The city notes its mature oak and walnut trees along with a municipal pool, tennis courts, ball fields, a disc golf course and playgrounds.',
    sections: [
      { h: 'Mature trees and buried lines', ps: [
        'Large trees are part of what the city highlights about this part of town. Tree roots can reach moisture through gaps and loose joints in buried pipe, and a root-clogged line often backs up again soon after it is cleared.',
        'That does not mean every house near the park has a root problem. If a drain keeps slowing down, a camera inspection can show whether roots are in the line, where they entered and whether the pipe needs repair.'
      ] },
      { h: 'What to ask before cleaning', ps: [
        'Hydro jetting can cut and flush root growth from a sound pipe. It does not close the opening the roots came through, so ask about the pipe condition and what happens if the same spot clogs again.'
      ] },
    ],
    faqs: [
      { q: 'Can roots clog a sewer line even if the pipe looks fine from the yard?', a: 'Yes. Roots can enter a small gap in a joint you cannot see from above. A camera inspection can confirm it.' },
      { q: 'Will hydro jetting stop roots for good?', a: 'It can clear the roots that are in the line now. If the opening remains, roots can return, so repair may be part of the answer.' },
      { q: 'Who is responsible for the line between my house and the street?', a: 'The line from a building to the public main is usually the owner\'s responsibility. The exact boundary can vary, so confirm it with the City of Ottawa or a qualified professional.' },
    ],
    sources: [
      { label: 'City of Ottawa, KS: Forest Park', url: 'https://www.ottawaks.gov/Facilities/Facility/Details/Forest-Park-5' },
    ],
    related: ['tree-root-intrusions', 'how-hydro-jetting-works'],
  },
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map((n) => [n.slug, n]));
