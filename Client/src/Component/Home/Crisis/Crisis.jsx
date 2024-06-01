import CrisisCart from "../../CrisisCart/CrisisCart";

export default function Crisis() {
  return (
    <div className="flex flex-col justify-center items-center py-4">
        <div className="my-4">
            <h1 className="text-crisisGreen text-6xl uppercase font-bold">The Crisis</h1>
            <p className="text-crisisGreen">Lack of organic content turns soil into sand, leading to:</p>  
        </div>
        <div className="flex flex-col justify-center items-center">
              <CrisisCart img='https://images.consciousplanet.org/save-soil/_next/static/media/climate.bb5f04ca.jpg?auto=format&fit=max&w=1920'
                  title='climate change'
                  paragraph="In 20 years, 40% less food is expected to be produced for 9.3 billion people.
                            Poor soil leads to poor nutritional value. Today's fruits and vegetables already contain 90% fewer nutrients.
                            2 billion people suffer from nutritional deficiencies leading to multitude of diseases." />
              
              <CrisisCart img='https://images.consciousplanet.org/save-soil/_next/static/media/loss.f7e4ea6a.jpg?auto=format&fit=max&w=1920'
                  title='loss of livelihood'
                  paragraph="Thousands of farmers are committing suicide due to depletion in soil.
                            74% of the poor are directly affected by land degradation globally.
                            It is estimated that soil extinction is costing the world up to US$ 10.6 trillion every year." />
              
              <CrisisCart img='https://images.consciousplanet.org/save-soil/_next/static/media/water.5c3a0236.jpg?auto=format&fit=max&w=1920'
                  title='water scarcity'
                  paragraph="Depleted soils cannot absorb and regulate water flows.
                            Lack of water retention leads to water scarcity, droughts & floods.
                            Organic matter can hold up to 90% of its weight in water and release it slowly over time. This is a big help in drought-prone areas." />
              
              <CrisisCart img='https://images.consciousplanet.org/save-soil/_next/static/media/bio-diversity.c681466f.jpg?auto=format&fit=max&w=1920'
                  title='loss of bio-diversity'
                  paragraph="Scientists say that around 27000 species of life forms are becoming extinct every year due to loss of habitat.
                            The crisis has reached a point where 80% of the insect biomass has gone.
                            Loss of biodiversity further disrupts the soil habitat and prevents soil regeneration." />
        </div>  
    </div>
  )
}
