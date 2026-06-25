import PropTypes from 'prop-types';

/**
 * Remplace `<img>` pour les images issues de `public/`.
 * Dérive automatiquement le chemin `.webp` depuis le `src` original
 * et les sert via `<picture>` avec fallback PNG/JPG.
 *
 * Le `.webp` doit avoir été généré au préalable par `scripts/optimize-images.js`.
 *
 * @param {Object} props
 * @param {string} props.src - Chemin de l'image originale (`.png`, `.jpg`, `.jpeg`)
 * @param {string} props.alt - Texte alternatif
 * @param {string} [props.className] - Classes CSS
 * @returns {JSX.Element}
 */
const OptimizedImage = ({ src, alt, className, ...props }) => {
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} className={className} {...props} />
    </picture>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default OptimizedImage;
