import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export default function TextEditor() {
    const editorConfiguration = {
        toolbar: {
            item: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'imageUpload',
                'blockQuote',
                'insertTable',
                'mediaEmbed',
                'undo',
                'redo',
                'alignment',
                'code',
                'codeBlock',
                'findAndReplace',
                'fontColor',
                'fontFamily',
                'fontSize',
                'fontBackgroundColor',
                'highlight',
                'horizontalline',
                'htmlEmbed',
                'imageInsert',
            ]
        },
        language: 'en',
        image: {
            toolbar: [
                'imageTextAlternative',
                'toggleImageCaption',
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
            ]
        },
        table: {
            toolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        }
    };

    return (
        <>
            <CKEditor
                editor={Editor}
                config={editorConfiguration}
                data="<p>Hello from CKEditor 5!</p>"
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log(data);
                }}
            />
        </>
    )
}
