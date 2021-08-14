import React from "react";

const List = () => {
  return (
    <div>
      <h1>Scrambled Eggs</h1>
      <p>
        Eggs are one of my favorite foods. Here is a recipe for deliciously rich
        scrambled eggs.
      </p>
      <h2>Ingredients</h2>
      <ul>
        <li>2 eggs</li>
        <li>1tbs butter</li>
        <li>2tbs cream</li>
      </ul>
      <br />

      <h2>Method</h2>
      <ol>
        <li>Melt butter in a frying pan over a medium heat</li>
        <li>Gently mix the eggs and cream in a bowl</li>
        <li>Once butter has melted add cream and eggs</li>
        <li>
          Using a spatula fold the eggs from the edge of the pan to the center
          every 20 seconds (as if you are making an omelette)
        </li>
        <li>
          When the eggs are still moist remove from the heat (it will continue
          to cook on the plate until served)
        </li>
      </ol>
      <br />

      <h2>Sushi</h2>
      <dl>
        <dt>Sashimi</dt>
        <dd>
          Sliced raw fish that is served with condiments such as shredded daikon
          radish or ginger root, wasabi and soy sauce
        </dd>
        <dt>Scale</dt>
        <dd>A device used to accurately measure the weight of ingredients</dd>
        <dd>
          A technique by which the scales are removed from the skin of a fish
        </dd>
        <dt>Scamorze</dt>
        <dt>Scamorzo</dt>
        <dd>
          An Italian cheese usually made from whole cow's milk (although it was
          traditionally made from buffalo milk)
        </dd>
      </dl>
    </div>
  );
};

export default List;
