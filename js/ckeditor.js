/**
 * @file
 * Provides JS utilities.
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import EasyImageUpload from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
// Basic Styles
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ckeditor5Create = {
    attach: function (context) {
      if (jQuery('[data-editor-active-text-format=basic_html]:not([ckeditor-applied=1])').length > 0) {
        // Prevent duplicated execution.
        jQuery('[data-editor-active-text-format=basic_html]').attr('ckeditor-applied', 1);
        // Create editor.
        ClassicEditor.create(
          document.querySelector('[data-editor-active-text-format=basic_html]'), 
          {
            plugins: [ Essentials, Paragraph, Bold, Italic, Underline, Strikethrough, Code, EasyImageUpload, Alignment ],
            cloudServices: {
                // From account in ckeditor.com
                tokenUrl: 'https://35834.cke-cs.com/token/dev/rCIlirmnPfSErxaZFY8H53BZldrqsWi49ReQZuPa2GumwzFzn0zgePGhD7n3',
                uploadUrl: 'https://35834.cke-cs.com/easyimage/upload/',
                webSocketUrl: '35834.cke-cs.com/ws',
                documentId: 'node-4'
            },
            toolbar: [ 'bold', 'italic', 'underline', 'strikethrough', 'code', '|', 'undo', 'redo', '|', 'imageUpload', '|', 'alignment:right', 'alignment:left' ]
          } 
        ).then(
          editor => {
            console.log( editor );
          } 
        ).catch( 
          error => {
            console.error( error );
          } 
        );
      }
    }
  };
})(jQuery, Drupal);
