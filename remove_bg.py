from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=30):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is near white
        if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
            # Change near-white to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Auto-crop empty padding so the logo fills the entire element height
    bbox = img.getbbox()
    if bbox:
        # Add tiny 4px padding if possible
        x1, y1, x2, y2 = bbox
        x1 = max(0, x1 - 4)
        y1 = max(0, y1 - 4)
        x2 = min(img.width, x2 + 4)
        y2 = min(img.height, y2 + 4)
        img = img.crop((x1, y1, x2, y2))
        
    img.save(output_path, "PNG")

remove_white_bg("public/aisma-new-logo.jpeg", "public/aisma-logo-transparent.png", tolerance=35)
print("Background removed and cropped successfully! New size:", img.size if 'img' in locals() else 'done')
