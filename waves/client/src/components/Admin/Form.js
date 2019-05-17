import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../utils/Form/formField';

const Form = ({
  handleSubmit,
  updateForm,
  formError,
  formSuccess,
  name,
  description,
  price,
  brand,
  wood,
  frets,
  shipping,
  available,
  publish
}) => {
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <FormField
        id="name"
        formdata={name}
        change={e => updateForm(e)}
      />

      <FormField
        id='description'
        formdata={description}
        change={e => updateForm(e)}
      />

      <FormField
        id='price'
        formdata={price}
        change={e => updateForm(e)}
      />

      <div className="form_devider"></div>

      <FormField
        id='brand'
        formdata={brand}
        change={e => updateForm(e)}
      />

      <FormField
        id='wood'
        formdata={wood}
        change={e => updateForm(e)}
      />

      <FormField
        id='frets'
        formdata={frets}
        change={e => updateForm(e)}
      />

      <div className="form_devider"></div>

      <FormField
        id='shipping'
        formdata={shipping}
        change={e => updateForm(e)}
      />

      <FormField
        id='available'
        formdata={available}
        change={e => updateForm(e)}
      />

      <div className="form_devider"></div>

      <FormField
        id='publish'
        formdata={publish}
        change={e => updateForm(e)}
      />

      {
        formSuccess ?
          <div className="form_success">
            Success
          </div> : ''
      }

      {
        formError ?
          <div className="error_label">
            Please check your data
          </div> : ''
      }

      <button
        type="button"
        className="button"
        onClick={e => handleSubmit(e)}
      >
        Add product
      </button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  updateForm: PropTypes.func,
  formError: PropTypes.bool,
  formSuccess: PropTypes.string,
  name: PropTypes.object,
  description: PropTypes.object,
  price: PropTypes.object,
  brand: PropTypes.object,
  wood: PropTypes.object,
  frets: PropTypes.object,
  shipping: PropTypes.object,
  available: PropTypes.object,
  publish: PropTypes.object,
};

export default Form;
