import React from "react";

const FlexBox = () => {
  return (
    <div>
      <p>
        <strong>Overview:</strong> Flexbox is a one-dimensional layout model in
        CSS. It is designed to distribute space along a single row or column and
        align items flexibility within a container.
      </p>
      <p>
        <strong>Key Concepts of Flexbox:</strong>
        <ol>
          <li>Flex Container: The parent element that holds flex items</li>
          <li>
            Flex Items: The direct children of the flex container that are laid
            out using flex properties
          </li>
        </ol>
      </p>
      <p>
        <ol>
          <li>
            <p>
              <strong>Defining a Flex Container</strong>
              <p>
                To create a flexbox layout, set the container's display property
                to flex or inline-flex:
              </p>
              <ol>
                <li>
                  display: flex: Makes the container a block-level flex
                  container.
                </li>
                <li>
                  display: inline-flex: Makes the container an inline-level flex
                  container.
                </li>
              </ol>
            </p>
          </li>
          <li>
            <p>
              <strong>Main Axis and Cross Axis</strong>
              <ul>
                <li>
                  <strong>Main Axis:</strong> {""}
                  The direction in which flex items are laid out.
                  <ul>
                    <li>Row (left to right) or Column (top to bottom).</li>
                  </ul>
                  <strong>Cross Axis:</strong> {""}
                  Perpendicular to the main axis.
                  <ul>
                    <li>
                      If the main axis is row, the cross axis is column (and
                      vice versa).
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </li>
          <li>
            <strong>Flex Direction:</strong> Use flex-direction to set the
            direction of the main axis
          </li>
          <li>
            <strong>Wrapping Flex Items</strong>
            <p>
              {" "}
              By default, flex items try to fit into one line.
              <ul>
                <li>
                  flex-flow is a shorthand for flex-direction and flex-wrap.
                </li>
              </ul>
            </p>
          </li>
          <li>
            <strong>Justifying Content Along Main Axis:</strong> Use
            justify-content to align flex items along the main axis
          </li>
          <li>
            <strong>Aligning Items Along Cross Axis:</strong> Use align-items to
            align flex items along the cross axis
          </li>
          <li>
            <strong>
              Aligning Content on Cross Axis (Multi-line Containers):
            </strong>{" "}
            If flex items wrap into multiple lines, use align-content
          </li>
          <li>
            <strong>Ordering Flex Items:</strong> Change the order of flex items
            using the order property
          </li>
          <li>
            <strong>Controlling Item Growth and Shrinkage</strong>{" "}
            <p>
              Control how flex items grow or shrink using:
              <ul>
                <li>
                  flex-grow: How much a flex item will grow relative to others.
                </li>
                <li>
                  flex-shrink: How much a flex item will shrink relative to
                  others.
                </li>
                <li>
                  flex-basis: The initial size of the flex item before space
                  distribution.
                </li>
              </ul>
            </p>
          </li>
          <li>
            <strong>Aligning Individual Items:</strong> To override align-items
            for specific items, use align-self:
          </li>
          <li>
            <strong>Best Practices</strong>
            <ul>
              <li>
                Use flex-grow and flex-shrink instead of width for fluid
                layouts.
              </li>
              <li>
                Use flex-basis for fixed sizing before applying
                growth/shrinkage.
              </li>
              <li>Limit nesting of flex containers for maintainability.</li>
              <li>
                Prefer align-items and justify-content for alignment instead of
                margin hacks.
              </li>
            </ul>
          </li>
        </ol>
      </p>
    </div>
  );
};

export default FlexBox;
