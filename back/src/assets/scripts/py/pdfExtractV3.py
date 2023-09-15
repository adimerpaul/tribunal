from PyPDF2 import PdfReader
import sys
import re
import json
import base64
import io


def save_pdf_image(base64_file):
    bufferpdf=base64.b64decode(base64_file)
    f=io.BytesIO(bufferpdf)
    reader = PdfReader(f)
    page = reader.pages[0]
    cadena = page.extract_text()
    pattern = r'<(.*?)>'
    result = {}
    nombres = [
        'cedulaIdentidad',
        'paterno',
        'materno',
        'nombres',
        'fechaNacimiento',
        'procedencia',
        'lugarExpedicion',
        'tipoRegistro',
        'domicilio',
        'profesion',
        'estadoCivil',
        'conyugue',
        'madre',
        'paisNacimiento',
        'departamentoNacimiento',
        'provinciaNacimiento',
        'localidadNacimiento',
        'fotografia'
    ]
    j = 0
    for match in re.findall(pattern, cadena):
        result[nombres[j]] = match
        j = j + 1
    image_file = page.images[1].data
    fotografia_base64 = base64.b64encode(image_file).decode('utf-8')
    result[nombres[j]] = fotografia_base64
    json_result = json.dumps(result)

    print(json_result)


file_path = sys.argv[1]

save_pdf_image(file_path)
