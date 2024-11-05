'use client'
import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	Autosave,
	BlockQuote,
	Bold,
	Essentials,
	Heading,
	Indent,
	IndentBlock,
	Italic,
	Link,
	Paragraph,
	SelectAll,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	Undo
} from 'ckeditor5';

import translations from 'ckeditor5/translations/uk.js';

import 'ckeditor5/ckeditor5.css';

import s from './editor.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import Button from '@/components/elements/mainButton/Button';
import { toast } from 'react-toastify';
import clsx from 'clsx';

export default function Editor() {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);
	const [editorData, setEditorData]= useState('');
	const [title, setTitle]=useState('');

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'|',
				'link',
				'insertTable',
				'blockQuote',
				'|',
				'outdent',
				'indent'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Autoformat,
			Autosave,
			BlockQuote,
			Bold,
			Essentials,
			Heading,
			Indent,
			IndentBlock,
			Italic,
			Link,
			Paragraph,
			SelectAll,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			Underline,
			Undo
		],
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		initialData:
			'',
		language: 'uk',
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		placeholder: 'Type or paste your content here!',
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		},
		translations: [translations]
	};


	const ChangeEditorData=(event, editor) => {
        const data = editor.getData();
        setEditorData(data);
      };

	  const changeTitle = (e)=> {
		const value = e?.currentTarget?.value;
		setTitle(value)
	  };

	  const resetFields = ()=> {
		setTitle('');
		setEditorData('');
	  }

	  const handleSavePost = async()=> {
		const post = {
			title: {
				uk: title,
				ru: title,
			},
			text: {
				uk: editorData,
				ru: editorData
			}
		};

		try {
			const res = await fetch('/lib/setPost', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({post}),
			  });
			  const result = await res.json();

			if(!result.ok) { toast.error(result?.message);return}
			if (result.ok) {
			resetFields();
		
			}} catch (error) {
			 console.log(error)
			} 

		

	  }

	  const isDisabled = title.length === 0 || editorData.length === 0 ? true : false;

	return (
		<MainContainer>
			
		<div className={s.wrapper}>
			<label className={s.title_label} htmlFor="title">
				Post title
			<input id='title' className={s.title_input} value={title} onChange={changeTitle} type="text" />
			</label>
		
			<div className={s.main_container}>
				<div className={clsx(s.editor_container, s.editor_container_classic_editor)}  ref={editorContainerRef}>
					<div className={s.editor_container__editor}>
						<div ref={editorRef}>{isLayoutReady && <CKEditor onChange={ChangeEditorData}  data={editorData} editor={ClassicEditor} config={editorConfig} />}</div>
					</div>
				</div>

				
			</div>
			<Button disabled={isDisabled} action={handleSavePost} title={'Зберегти'}/>
		</div>
		</MainContainer>
	);
}