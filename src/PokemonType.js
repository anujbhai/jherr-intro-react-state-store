import PropTypes from "prop-types";

const PokemonType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string
  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired
  })
});

export default PokemonType;
