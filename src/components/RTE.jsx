import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

 
export default function RTE({name, control, label, defaultValue = ""}) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pt-1'>{label}</label>}
      <Controller
      name={name || 'content'}
      control={control}
      render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'table emoticons template paste help'
          ],
          toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons',
          content_style: "body { font-family: Helvetica, Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
      )}
      />
    </div>
  )
}

