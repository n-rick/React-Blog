// import image from './img/grotte.jpg';
import './about.css';

function About() {
  return (
    <>
      <main>
        <a href="/"><button type="button" className="btn btn-outline-warning m-3">Retour page accueil</button></a>
        <section className="m-2">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-auto">
                <img src="https://loremflickr.com/320/240/brazil,rio" alt="image du Brésil" className="m-2" align="left" />
                {/* <img src={image} alt="image du Brésil" /> // Util pour faire des imports qd fichier dans src*/}
              <div className="col">
                <div className="card-block">
                  <h1 className="card-title">Le Brésil</h1>
                  <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus non recusandae laudantium facere, veritatis reprehenderit nam aspernatur quia in reiciendis sunt, cupiditate nobis. Odit dolor natus architecto quibusdam eaque.
                  Ea adipisci asperiores excepturi corporis autem. Dolor ut asperiores in, tempora veniam eaque, praesentium dolorum, obcaecati doloribus temporibus quas. Eligendi quia vero officiis quibusdam necessitatibus suscipit vel excepturi mollitia itaque.
                  Exercitationem, ipsa consectetur. Iste doloremque facilis perferendis at exercitationem? Animi ducimus accusamus sapiente, veniam quas illum soluta repudiandae, quidem ut fuga nam, dolore labore non! Illo facilis assumenda eligendi. Incidunt.
                  Et sapiente error maiores odio veritatis illo est, modi, nam id assumenda fuga debitis iusto maxime nemo magnam tempora? Aliquid aut beatae quos eius, saepe nihil odio iste itaque reiciendis.
                  Nostrum amet dicta expedita ipsum saepe libero dolorum quam, repudiandae veniam corrupti repellat, et alias accusantium voluptatibus laboriosam doloremque aperiam dolorem rerum consequatur quaerat itaque delectus ipsa modi. Amet, ipsam?
                  Quidem dolor placeat magni nobis omnis, cumque hic? Soluta quos accusantium, doloremque exercitationem facilis iste eum minima sapiente ratione cupiditate corrupti eveniet qui dolor repudiandae iusto natus velit voluptates. Perferendis!
                  Nihil, eligendi quisquam ad id quo consectetur beatae similique minima est laborum aliquid non optio! Aut nulla quod dolore repellat assumenda molestiae error velit dignissimos? Voluptatibus cumque dicta consequuntur quo!
                  Numquam alias, accusamus doloribus commodi voluptas perspiciatis tenetur, eius at ratione optio tempora provident illo impedit. Autem earum rerum, eveniet possimus nemo accusantium cupiditate ex aperiam, doloribus ut, architecto velit?
                  Aliquid dolores nostrum sint porro itaque optio, laudantium minus, facere debitis asperiores pariatur dolorum sunt autem quod aut ad obcaecati sed vel neque eos blanditiis alias. Temporibus tempore harum consequuntur?
                  Velit cumque facilis illum nihil reiciendis officiis distinctio ratione aut natus ducimus suscipit excepturi voluptatem, sunt dolore? Doloremque eos commodi repudiandae reiciendis, facere perspiciatis molestiae eligendi obcaecati aspernatur et ab.
                  Voluptatibus quasi beatae nesciunt iure nemo reiciendis, earum vero! Nobis quis enim dolorum. Iure blanditiis rerum est officia quae sint, repellendus ad modi eos possimus doloremque vitae at vel esse!</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
