import csv
import os

def import_members(csv_file, yml_file):
    # Ensure files exist
    if not os.path.exists(csv_file):
        print(f"Error: {csv_file} not found.")
        return
        
    if not os.path.exists(yml_file):
        print(f"Error: {yml_file} not found.")
        return

    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            new_members = list(reader)
    except Exception as e:
        print(f"Error reading CSV: {e}")
        return

    try:
        with open(yml_file, 'a', encoding='utf-8') as f:
            f.write('\n# Normal Members imported from CSV\n')
            for member in new_members:
                name = member.get('Name', '').strip()
                department = member.get('department', '').strip()
                
                if not name:
                    continue
                    
                initials = "".join([n[0] for n in name.split() if n]).upper()[:2]
                if not initials:
                    initials = "M"

                f.write(f'  - name: "{name}"\n')
                f.write(f'    image: "https://placehold.co/300x300/0D0D14/3DB8E8?text={initials}"\n')
                f.write(f'    role: "Member"\n')
                f.write(f'    department: "{department}"\n')
                f.write(f'    description: "Member of {department} Department."\n')
                
        print(f"Successfully appended {len(new_members)} members to {yml_file}")
    except Exception as e:
        print(f"Error appending to YAML: {e}")

if __name__ == "__main__":
    csv_path = os.path.join('_data', '2025_data.csv')
    yml_path = os.path.join('_data', '2025_members.yml')
    import_members(csv_path, yml_path)
